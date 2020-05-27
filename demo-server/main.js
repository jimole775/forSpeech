const router = require('koa-router')()
const Koa = require('koa')
const app = new Koa()
;(async function () {
  function createRoutes (router) {
    return new Promise((s, j) => {
      Array.from(Array(100)).forEach((i, $i) => {
        router.get('/test/' + $i, async (cxt, next) => {
          console.log('is comming!', '/test/' + $i)
          await new Promise(($s, $j) => {
            setTimeout(() => {
              $s(cxt.response.body = 'test' + $i)
            }, Math.round(Math.random() * 500))
          })
        })
      })
      s(router)
    })
  }
  const _router = await createRoutes (router)
  app.use(_router.routes())
  app.use(_router.allowedMethods())
  app.listen(3000)
})()

