const express = require("express")
const formidable = require("formidable")
const MonggoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017"
var app = express()
app.post("/login", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    var form = new formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
        console.log(fields)
        login(fields, res)
    })
})
app.post("/register", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    var form = new formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
        console.log(fields)
        register(fields, res)
    })
})
app.post("/search", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    var form = new formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
        search(fields, res)
    })
})
app.post("/add", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    var form = new formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
        addFriend(fields, res)
    })
})
app.get("/nearbyPersons",function(req,res){
    res.setHeader("Access-Control-Allow-Origin", "*")
    var form = new formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
        getNearbyPersons(fields,res)
    })
})
app.get("/bottles",function(req,res){
    res.setHeader("Access-Control-Allow-Origin", "*")
    var form = new formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
        getBottles(fields,res)
    })
})
app.listen(3000)

function login(fields, res) {
    MonggoClient.connect(url, function (err, client) {
        if (err) {
            console.log(err)
        } else {
            const db = client.db("users")
            var userInfo = db.collection("userInfo")
            userInfo.find({
                number: parseInt(fields.number)
            }).toArray(function (err, doc) {
                if (doc.length == 0) {
                    res.send("not_exist")
                } else if (doc[0].password !== fields.password) {
                    res.send("pass_error")
                } else {
                    res.json(doc[0])
                }
            })

            client.close()
        }
    })
}

function register(fields, res) {
    MonggoClient.connect(url, function (err, client) {
        if (err) {
            console.log(err)
        } else {
            const db = client.db("users")
            var userInfo = db.collection("userInfo")
            userInfo.find({
                number: parseInt(fields.number)
            }).toArray(function (err, doc) {
                console.log(doc)
                if (doc.length !== 0) {
                    res.send("exist")
                    client.close() //回调中关闭连接
                } else {
                    userInfo.insertOne({
                        userName: fields.username,
                        number: fields.number,
                        password: fields.password
                    }, function (err, res) {
                        if (err) {
                            console.log(err)
                        }
                    })
                    res.send("success")
                    client.close()
                }
            })

        }
    })
}

function search(fields, res) {
    MonggoClient.connect(url, function (err, client) {
        if (err) {
            console.log(err)
        } else {
            console.log(parseInt(fields.number))
            const db = client.db("users")
            var userInfo = db.collection("userInfo")
            userInfo.find({
                number: parseInt(fields.number)
            }).toArray(function (err, doc) {
                if (doc.length == 0) {
                    res.send("not_exist")
                } else {
                    res.json({
                        number: doc[0].number,
                        userName: doc[0].userName
                    })
                }
            })

            client.close()
        }
    })
}

function addFriend(fields, res) {
    MonggoClient.connect(url, function (err, client) {
        if (err) {
            console.log(err)
        } else {
            const db = client.db("users")
            var userInfo = db.collection("userInfo")
            userInfo.update({
                number: parseInt(fields.number)
            }, { $push: { "friends": JSON.parse(fields.friend) } })
            res.send("success")
            client.close()
        }
    })
}
function getNearbyPersons(fields,res){
    MonggoClient.connect(url, function (err, client) {
        if (err) {
            console.log(err)
        } else {
            const db = client.db("users")
            var userInfo = db.collection("discover")
            userInfo.find({}).toArray(function(error,doc){
                if(error){
                    console.log(error)
                }else{
                    res.json(doc[0].nearbyPersons)
                }
            })
            client.close()
        }
    })
}
function getBottles(fields,res){
    MonggoClient.connect(url, function (err, client) {
        if (err) {
            console.log(err)
        } else {
            const db = client.db("users")
            var userInfo = db.collection("discover")
            userInfo.find({}).toArray(function(error,doc){
                if(error){
                    console.log(error)
                }else{
                    res.json(doc[0].bottles)
                }
            })
            client.close()
        }
    })
}