const debug = require('debug')('koa-weapp-demo')
const AHP = require('ahp');
const ahpContext = new AHP();
/**
 * 响应处理模块
 */
module.exports = async function (data, next) {
    try {
        // 1. 准备需要的数据
        let mysql_db = global.app.get('MysqlConn');
        let taskName = data.itemName;
        let sql = "SELECT * FROM task_Detail WHERE taskName='" + taskName + "'";
        // 获取记录并解析成结果对象
        let taskDetail = mysql_db.query.sync(mysql_db, sql)[0];
        // 准备相关量数组
        let perkArray = [];
        if (taskDetail.length && taskDetail.length > 0) {
            if (taskDetail.perks.length && taskDetail.perks.length > 0) {
                perkArray = taskDetail.perks;
            } else {
                perkArray = [];
            }
        }
        // 准备处理结果数组
        let resultArray = [];
        if (data.result instanceof Array) {
            resultArray = data.result ? data.result : [];
        }
        // 2. 装载处理结果数组
        ahpContext.addItems(resultArray);
        // 3. 装载相关量数组
        ahpContext.addCriteria(perkArray);
        // 4. 将相关量数组更具相关值进行权重排序
        let correlativeArray = [];
        for (let i = 0; i < perkArray.length - 1; i ++) {
            for (let j = i + 1 ; j < perkArray.length; j ++) {
                // 将相关量标签成组，标签值相加
                correlativeArray.push([perkArray[i].tag, perkArray[j].tag, (perkArray[i].value + perkArray[j].value)]);
            }
        }
        ahpContext.rankCriteria(correlativeArray);
        // 5. 循环处理相关量权重
        perkArray.forEach((item) => {
            let combinationArray = [];
            for (let i = 0; i < resultArray.length - 1; i ++) {
                for (let j = i + 1 ; j < resultArray.length; j ++) {
                    // 默认基础权重分值为1
                    combinationArray.push([resultArray[i], resultArray[j]], 1);
                }
            }
            // 采用模块的标准模式进行权重计算
            ahpContext.rankCriteriaItem(item, combinationArray);
        });
        let output = JSON.parse(JSON.stringify(ahpContext.run()));
        console.log(output);
        // 6. 结果入库
        mysql_db.query.sync(mysql_db, 'INSERT INTO task_Detail (taskID, task_result) VALUES (?, ?)',
            [data.taskID, output]
        );
    } catch (e) {
        // catch 住全局的错误信息
        debug('Catch Error: %o', e)

        // 设置状态码为 200 - 服务端错误
        ctx.status = 200

        // 输出详细的错误信息
        ctx.body = {
            code: -1,
            error: e && e.message ? e.message : e.toString()
        }
    }
}