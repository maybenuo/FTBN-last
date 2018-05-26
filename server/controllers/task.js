const { message: { checkSignature } } = require('../qcloud')
const taskMiddle= require('./middlewares/taskResponse')

/**
 * 响应 task 请求
 */
async function taskList (req, res) {
    try {
        let mysql_db = global.app.get('MysqlConn'),

            username = req.body.username,
            password = req.body.pwd,

            sql = "SELECT * FROM db_admin WHERE username='" + username + "'",
            result = mysql_db.query.sync(mysql_db, sql)[0],

            cipher = crypto.createCipher('aes192', 'hjb'),
            pwd = cipher.update(password, 'utf8', 'base64')
            pwd += cipher.final('base64')

        if (result.length > 0) {
            let sql_1 = "SELECT * FROM db_admin WHERE username='" + username + "' AND password='" + pwd + "'",
                result_1 = mysql_db.query.sync(mysql_db, sql_1)[0]

            if (result_1.length > 0) {
                res.json({
                    'result': '1',
                    'info': '登陆成功',
                    'data': result_1[0].username
                })
            } else {
                res.json({
                    'result': '0',
                    'info': '密码错误'
                })
            }
        } else {
            res.json({
                'result': '0',
                'info': '当前用户不存在'
            })
        }
    } catch (e) {
        console.log(e)

        res.json({
            'result': '0',
            'info': e
        })
    }
}

async function taskDetail (req, res, next) {

    res.body = 'success'
}

async function addTaskResult (ctx, next) {

    const { signature, timestamp, nonce } = ctx.query
    if (!checkSignature(signature, timestamp, nonce)) ctx.body = 'ERR_WHEN_CHECK_SIGNATURE'

    const body = ctx.request.body

    res.body = 'success'
}
module.exports = {
    taskList,
    taskDetail,
    addTaskResult
}
