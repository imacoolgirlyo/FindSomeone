const express = require('express'),
http = require('http'),
app = express(),
path = require('path'),
server = http.createServer(app),
bodyParser = require('body-parser'),
MongoClient = require('mongodb').MongoClient;

const PORT = 8000;
const handleListening = () => {
    console.log(`✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ Server Running on : http://localhost:8000 ✅ ✅ ✅ ✅ ✅ ✅ ✅ `);
}

app.post('/', function(req, res){
    res.send("user is uploaded ");
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.listen(PORT, handleListening);
app.use(express.static(path.join(__dirname, "public")));