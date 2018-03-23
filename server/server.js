var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var bookID = 1;

var url = "mongodb://localhost:27017/";
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*

Customers will have these properties
-Unique ids
-first name
-last name
-books checked out
    -checkout dat
    -return date

*/

//enables CORS
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.post('/', function(req, res) {
    var jsondat = JSON.parse(req.body['data']);
    console.log(jsondat);
    parseData(jsondat);
    res.send(jsondat);
});

app.listen(3000, () => console.log("listening on port 3000"));

//handles each request accordingly by jumping to appropriate function
function parseData(userData){
    switch(userData['requestType']){
        case 'add_book':
            addBook(userData['details']);
            break;
        case 'remove_book':
            removeBook(userData['details']);
            break;
        case 'checkout_book':
            checkoutBook(userData['details']);
            break;
        case 'return_book':
            returnBook(userData['details']);
        default:
            console.log("error: no request type");
            break;
    }
}

//adds a book to the database permanently
/*
    "requestType": "add_book",
    "details": {
        "book_ID": id,
        "author_first_name": fname,
        "author_last_name": lname,
        "book_name": bname,
        "genre": genre,
        "publish_date": date,
        "checked_out": false
    }
*/
function addBook(data){
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var db = db.db("library");
        db.collection("books").insertOne(data, function(err, res) {
            if(err) throw err;
            console.log("Book added!");
        });
        
            //db.close();
    });
}

//removes book from database permanently
/*
    "requestType": "remove_book",
    "details": bookid
*/
function removeBook(data){
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var db = db.db("library");
        var bookid = {"book_ID": data};
        
        db.collection("books").deleteOne(bookid, function(err, obj) {
            if (err) throw err;
            console.log("Book ", data, " deleted");
            db.close();
        });
    });
}