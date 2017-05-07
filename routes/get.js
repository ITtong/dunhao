var router = require('koa-router')();
var parsePostData = require('./utils/parsePost');

module.exports = router.get('/get', function (ctx, next) {
	let url = ctx.url;
	let request = ctx.query;// get请求获取请求参数
	ctx.body = {
		url:url,
		data:request
	}
})
.post('/post',function(ctx, next) {
	let post = parsePostData(ctx)
	ctx.body = post;
})
.get('/getForm',async function (ctx, next) {
	await ctx.render('formTest', {});
})
