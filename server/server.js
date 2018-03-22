var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');


var url = "mongodb://localhost:27017/";
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("library");
}); 


//collection for users
//collection for books
//library database has users and books




 /*
    {
        "book_ID": id,
        "author_first_name": name,
        "author_last_name": name,
        "book_name": name,
        "genre": name,
        "publish_date": date,
        "checked_out": true,
        "date_checked_out": date,
        "date_returned": returnDate,
        
    }
*/

/*

Customers will have these properties
-Unique ids
-first name
-last name
-books checked out
    -checkout dat
    -return date

*/

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', function(req, res, next) {
    var id = req.query.id;
    console.log(id);
    res.send(id);
});
app.post('/', function(req, res) {
    var jsondat = JSON.parse(req.body['data']);
    console.log(jsondat);
    res.send(jsondat);
});

app.listen(3000, () => console.log("listening on port 3000"));