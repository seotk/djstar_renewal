const serviceKey = "9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D"
const Axios = require('axios')
const axios = Axios.create({
  baseURL: 'http://apis.data.go.kr/1360000/VilageFcstInfoService',
  params: { serviceKey, pageNo: 1, numOfRows: 99, dataType: 'JSON' }
})