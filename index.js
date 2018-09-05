const express = require('express'),
http = require('http'),
app = express(),
path = require('path'),
server = http.createServer(app),
bodyParser = require('body-parser'),
MongoClient = require('mongodb').MongoClient,
assert = require('assert');

const url = "mongodb://localhost:27017";
const dbName = 'user';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const conn = MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true });

const PORT = 8000;
const handleListening = () => {
    console.log(`✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ Server Running on : http://localhost:8000 ✅ ✅ ✅ ✅ ✅ ✅ ✅ `);
}

const handleGetUsers = (req, res) => {
    console.log("hi");
    conn.then(client =>
        client.db('users').collection('user').find({}).toArray(function(err, d){
            res.json(d);
        }))
    .catch(err => console.error(err))
    }

app.post('/', function(req, res){
    const username = req.body.name;
    const birth = req.body.birth;

    conn.then(client => 
        client.db('users').collection('user').insertMany([{
           username : username,
            birth : birth
}])
        
    ).catch(err => console.error(err));

    res.send(`${username} is uploaded`);
})

app.get('/users', handleGetUsers);



server.listen(PORT, handleListening);
app.use(express.static(path.join(__dirname, "public")));