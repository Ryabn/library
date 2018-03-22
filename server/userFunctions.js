
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
        
        db.createCollection("books", data, function(err, results) {
            if(err) throw err;
            console.log("Book added!");
        });
        db.close();
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