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
router.get('/test', async (cxt, next) => {
  console.log('is comming!')
  await new Promise((s) => {
    setTimeout(() => {
      s(cxt.response.body = 'test')
    }, 3000)
  })
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)
