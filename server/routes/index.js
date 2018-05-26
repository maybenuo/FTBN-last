/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'
})
const controllers = require('../controllers')

// 从 sdk 中取出中间件
const { auth: { authorizationMiddleware, validationMiddleware } } = require('../qcloud')

// 登录接口
router.get('/login', authorizationMiddleware, controllers.login)
// 用户信息接口（可以用来验证登录态）
router.get('/user', validationMiddleware, controllers.user)

// 图片上传接口，小程序端可以直接将 url 填入 wx.uploadFile 中
router.post('/upload', controllers.upload)

// GET  用来响应请求信道地址的
router.get('/tunnel', controllers.tunnel.get)
// POST 用来处理信道传递过来的消息
router.post('/tunnel', controllers.tunnel.post)

// GET  用来响应小程序后台配置时发送的验证请求
router.get('/message', controllers.message.get)
// POST 用来处理微信转发过来的客服消息
router.post('/message', controllers.message.post)

// POST 处理任务列表
router.post('/task/taskList', controllers.task.taskList)
// POST 处理任务详情
router.post('/task/taskDetail', controllers.task.taskDetail)
// POST 处理任务结果上传
router.post('/task/addTaskResult', controllers.task.addTaskResult)

module.exports = router
