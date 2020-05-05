const puppeteer = require('puppeteer')
const { isImgUrl } = require('./assert')
module.exports = function initPage(requestCallback, responseCallback) {
  return new Promise(async (s, j) => {
    return loop(requestCallback, responseCallback, s, j)
  })
}

async function loop (requestCallback, responseCallback, s, j) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  // await page.setRequestInterception(true)
  page.on('request', interceptedRequest => {
    if (isImgUrl(interceptedRequest.url())) {
      console.log('url:', interceptedRequest.url())
      requestCallback && requestCallback(interceptedRequest)
    }
  })
  page.on('response', response => {
    responseCallback(response)
  })
  return s(page)
}