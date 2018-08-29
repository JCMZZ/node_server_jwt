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
    res.sendFile(__dirname+'/html/server0.html')
})
app.post('/data', urlencodedParser, function (req, res) {
    console.log(req.body.name)
	console.log("请求头：",req.headers.token)
    res.send(req.body)   
})

let server = app.listen(8880, function () {
    console.log("访问地址为 http://one.jwt.cc:8880")
})