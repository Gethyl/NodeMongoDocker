const express = require('express');
const bodyParser = require('body-parser');
const http = require('http')
const mongoose = require('mongoose')
const mongo = mongoose.mongo;

const app = express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// MONGOOSE CONNECT
// ===========================================================================
let dockerDb = process.env.DB_PORT
console.log("*******************************")

mongoose.connect('mongodb://172.20.0.2:27017/local')

var db = mongoose.connection
db.on('error', ()=> {console.log( '---Gethyl FAILED to connect to mongoose')})
db.once('open', () => {
	console.log( '+++Gethyl connected to mongoose')
})


app.get('/',(req,res)=>{
			res.send("Hello Gethyl")
		  });

app.get('/test',(req,res)=>{
			res.send("Hello test")
		  });		  

 

var serve = http.createServer(app);
serve.listen(3000,()=> {console.log("+++Gethyl Express Server test with Docker!!!")})