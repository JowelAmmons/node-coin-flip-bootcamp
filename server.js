const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
// const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
    if('playerGuess' in params){
      let coin = Math.floor(Math.random() * 2) === 0 ? 'liteCoin' : 'bitCoin'
      let coinImg = coin === 'liteCoin' ? '<img class="LTC crypto-currency" src="css/img/litecoin.png"/>' : '<img class="BTC crypto-currency" src="css/img/bitcoin.png"/>'
      let playerGuess = params['playerGuess']
      let result = coin === playerGuess ? true : false
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        flipResult: coin,
        flipImg: coinImg,
        outcome: result

        //if bug comes up console.log(objToJson)
      }
      res.end(JSON.stringify(objToJson));
    }
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/css/reset.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/logic.js'){
    fs.readFile('logic.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else if (page == '/css/img/litecoin.png'){
    fs.readFile('css/img/litecoin.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/css/img/bitcoin.png'){
    fs.readFile('css/img/bitcoin.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);