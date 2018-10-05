var iconv = require('iconv-lite');

export function getUserInfoFromToken(token = '') {
  if (!token) {
    token = window.localStorage.getItem('token')
  }
  let info = JSON.parse(decodeURIComponent(window.atob(token.split(/\./)[1])))
  return {
    id: info['sub'],
    name: info['userName']
  }
}