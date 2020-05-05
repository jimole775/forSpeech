function isArray(likeArray) {
  return Object.prototype.toString.call(likeArray) === '[object Array]'            
}

function isEmptyArray(likeArray) {
  return isArray(likeArray) && likeArray.length === 0    
}

function isObject(likeObject) {
  return Object.prototype.toString.call(likeObject) === '[object Object]'            
}

function isEmptyObject(likeObject) {
  return isObject(likeObject) && Object.keys(likeObject).length === 0    
}

function isString(likeString) {
  return Object.prototype.toString.call(likeString) === '[object String]'    
}

function isEmpty(likeEmpty) {
  return likeEmpty === undefined || likeEmpty === null || likeEmpty === ''
}

function isImgUrl(src) {
  return /(\.png|jpe?g|gif|icon|svg)\??.*/i.test(src)
}

function isHTMLUrl(src) {
  return /\.(s?html?)(\?.+)?$/.test(src)
}

function isCSSUrl(src) {
  return /\.(sass|css|less)(\?.+)?$/.test(src)
}

function isJSUrl(src) {
  return /\.(js)(\?.+)?$/.test(src)
}

function rangeEqual(a = 0, b = 0, range = 0) {
  return a >= b && a <= b * (1 + range) || a <= b && a * (1 + range) >= b
}

module.exports = {
  isObject,
  isImgUrl,
  isArray
}