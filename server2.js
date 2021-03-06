'use strict'
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let urlencodedParser = bodyParser.urlencoded({ extended: false })
let jsonParser = bodyParser.json()
let cors = require('cors')


app.use(cors())
app.use(express.static(__dirname+'/'));
app.get('/', function (req, res) {
    res.sendFile(__dirname+'/html/server2.html')
})
app.post('/data', jsonParser, function (req, res) {
	console.log("请求头：",req.headers.token)
    res.send(req.body)    
})

let server = app.listen(8882, function () {
    console.log("访问地址为 http://three.jwt.cc:8882")
})