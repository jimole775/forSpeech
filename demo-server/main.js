// require('@babel/register') // 转接外部模块的加载方式，amd改为common
// const Link = require('./link')
// const { isImgUrl } = require('./assert')
// const writeFile = require('./write-file')
const router = require('koa-router')()
const Koa = require('koa')
const app = new Koa()
// ;(async function () {
//   const data = []
//   const link = new Link('http://www.aigei.com/game2d/')
//   await link.on({
//     request: request => {
//       if ( isImgUrl(request.url()) ) {
//         data.push(request.url())
//       }
//     }
//   }).emit()
//   writeFile('ddd.json', `["${data.join('","')}"]`)
// })()
;(async function () {
  function createRoutes (router) {
    return new Promise((s, j) => {
      for (let index = 0; index < 100; index++) {      
        router.get('/test/' + index, async (cxt, next) => {
          console.log('is comming!')
          await new Promise(($s, $j) => {
            setTimeout(() => {
              $s(cxt.response.body = 'test' + index)
            }, 3000)
          })
        })
      }
      s(router)
    })
  }
  const _router = await createRoutes (router)
  app.use(_router.routes())
  app.use(_router.allowedMethods())
  app.listen(3000)
})()

