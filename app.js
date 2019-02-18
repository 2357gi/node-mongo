const express = require("express");
const app = express();


// 待受
const server = app.listen(3000, function(){
	console.log("node.js server is up. PORT:"+ server.address().port)
}


// const bodyParser = 

const url = 'mongodb://52.197.8.198/'
const dbname = 'event'

const MongoClient = require("mongodb").MongoClient


// postの処理
app.post("/", (req, res) => {
	MongoClient.connect(url, {
		userNewUrlParser: true
	}, (err, client) => {

		// コレクションの追加
		const col = client.db(dbname).collection('eventlog')

		// collectionにデータを挿入

		col.insertOne({
			data: req.body.data,
			'timestamp': new Date()
		}, (error, result) => {
			client.close()
		});
	});
	req.send('POST is sended.');
});








