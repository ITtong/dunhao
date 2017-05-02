var router = require('koa-router')();


module.exports = router.get('/',async function (ctx, next) {
    ctx.state = {
        style:['stylesheets/banner.css']
    };

    await ctx.render('index', {
    });
})