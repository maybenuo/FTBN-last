const { uploader } = require('../qcloud')

module.exports = async ctx => {
  console.log('上传图片')
    // 获取上传之后的结果
    // 具体可以查看：
    const data = await uploader(ctx.req)

    ctx.state.data = data
}
