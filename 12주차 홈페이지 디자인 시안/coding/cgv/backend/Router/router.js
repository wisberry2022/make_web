const express = require('express');
const Router = express.Router();
const axios = require('axios');
const date = new Date();

Router.get('/setImage', async (req, res) => {
  let data = await axios.get('https://openapi.naver.com/v1/search/movie.json', {
    params: {
      query: req.query.name,
      yearfrom: date.getFullYear() - 1,
      yearto: date.getFullYear()
    },
    headers: {
      "X-Naver-Client-Id": 'sp4_5CZOPaDaXu10QRQ_',
      "X-Naver-Client-Secret": 'qTyZjcU3vX'
    }
  })
  for (log in data) {
    log == 'data' && res.send(data[log])
  }
})

Router.get('/search', async (req, res) => {
  let data = await axios.get('https://openapi.naver.com/v1/search/movie.json', {
    params: {
      query: req.query.name,
    },
    headers: {
      "X-Naver-Client-Id": 'sp4_5CZOPaDaXu10QRQ_',
      "X-Naver-Client-Secret": 'qTyZjcU3vX'
    }
  })
  for (log in data) {
    log == 'data' && res.send(data[log]);
  }
})

module.exports = Router;