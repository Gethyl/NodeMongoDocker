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

mongoose.connect('mongodb://my-mongo:27017/local')

var db = mongoose.connection
db.on('error', (err)=> {
	console.error( '---Gethyl FAILED to connect to mongoose')
	console.dir(err)	
})
db.once('open', () => {
	console.log( '+++Gethyl connected to mongoose')
	mongoose.connection.db.listCollections().toArray((error,collectionList)=>{
		if (error) {
			throw new Error(error);
		} else {
			let isCollectionPresent = 
				collectionList.findIndex((eachCollection) => {
					console.log(eachCollection.name)
					return  eachCollection.name === "TodoTesting" ? true : false 
				});
			console.log("Collection Present Value ==> "+ isCollectionPresent)
			if (isCollectionPresent<0){
				console.log("Collection not found....")
			}		
		}
	})
})


app.get('/',(req,res)=>{
			res.send("Hello Gethyl")
		  });

app.get('/test',(req,res)=>{
			res.send("Hello test")
		  });		  

 

var serve = http.createServer(app);
serve.listen(3000,()=> {console.log("+++Gethyl Express Server started Docker with port 3000!!!")})