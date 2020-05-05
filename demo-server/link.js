const initPage = require('./init-page')
module.exports = class Link {
  constructor (url) {
    this.url = url
    this.page = {}
    this.request = () => {}
    this.response = () => {}
    this.end = () => {}
  }

  on ({ request, response, end }) {
    if (request) this.request = request
    if (response) this.response = response
    if (end) this.end = end
    return this
  }

  async emit () {
    this.page = await initPage(this.request, this.response)
    return new Promise((s, j) => {
      return this.emitHandler(this.url, s, j)
    })
  }

  async emitHandler (url, s, j) {
    try {
      console.log('goto start:', url)
      await this.page.goto(url, { timeout: 0 })
      console.log('goto end:', url)
      await this.shutdownPage()
      return s()
    } catch (error) {
      return this.emitHandler (url, s, j)
    }
  }

  shutdownPage () {
    return new Promise((s, j) => {
     return this.shutdownHandler(s, j)
    })
  }

  async shutdownHandler (s, j) {
    try {
      return s(await this.page.close())
    } catch (error) {
      return this.shutdownHandler(s, j)
    }
  }
}
