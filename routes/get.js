var router = require('koa-router')();

module.exports = router.get('/get', function (ctx, next) {
	let url = ctx.url;
	let request = ctx.query;// get请求获取请求参数
	ctx.body = {
		url:url,
		data:request
	}
})
.get('/getForm',async function (ctx, next) {
	await ctx.render('formTest', {}); //返回表单；
})
.post('/post',function(ctx, next) { // 获取post请求参数；
	let post = ctx.request.body
	ctx.body = post;
})