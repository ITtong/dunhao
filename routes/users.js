var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
})
.get('/hello',async function (ctx, next) {
	ctx.state = {
    	style:['stylesheets/banner.css']
  	};

	await ctx.render('index', {
	});
})

module.exports = router;
