var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    style:['stylesheets/banner.css']
  };

  await ctx.render('index', {
  });
})



module.exports = router;