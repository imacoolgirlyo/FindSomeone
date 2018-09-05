const express = require('express'),
http = require('http'),
app = express(),
path = require('path'),
server = http.createServer(app),
bodyParser = require('body-parser'),
MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017";
const dbName = 'user';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// MongoClient.connect(url, function(err, client){
//     console.log("Connect correctly to server");
//     const db
// })

const PORT = 8000;
const handleListening = () => {
    console.log(`✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ Server Running on : http://localhost:8000 ✅ ✅ ✅ ✅ ✅ ✅ ✅ `);
}

app.post('/', function(req, res){
    const username = req.body.name;
    const birth = req.body.birth;
    console.log(username);
    res.send(`${username} is uploaded`);
})




server.listen(PORT, handleListening);
app.use(express.static(path.join(__dirname, "public")));