import $Promise from './$Promise'
export default function Http () {
}

Http.prototype.get = function (url) {
  var xhr = new XMLHttpRequest()
  xhr.responseType = 'text'
  return new $Promise(function (s, j) {
    xhr.onload = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          return s({data: this.responseText, status: this.status, message: 'success'})
        } else {
          return j({data: this.responseText, status: this.status, message: 'error'})
        }
      }
    }
    xhr.open("GET", url)
    xhr.send()
  })
}

// var http = new Http()
// http.get('/test/1').then((data) => {console.log(data)})
