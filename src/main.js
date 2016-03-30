import http from 'http'

export default class Http {
  static defaultParams = {
    color1: '#abf7f7',
    color2: '#4dfbfb'
  }

  constructor (params) {
    this.duration = params
  }

  run (value) {
    return new Promise((resolve, reject) => {
      http.get(value, (res) => {
        let body = ''

        res.on('data', (chunk) => {
          body += chunk
        })

        res.on('end', (chunk) => {
          if (body.length !== 0) {
            resolve(body)
          }
        })
      }).on('error', (e) => {
        reject(e)
      })
    })
  }
}
