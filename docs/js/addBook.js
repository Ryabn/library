function validateUserInfo(){
    var data = {
        "requestType": "add_book",
        "details":{
            "book_name": document.getElementById('book-name').value,
            "author_first_name": document.getElementById('first-name').value,
            "author_last_name": document.getElementById('last-name').value,
            "genre": document.getElementById('genre').value,
            "publish_date": document.getElementById('publish-date').value,
            "checked_out": false,
            "date_checked_out": false,
            "date_returned": false
        }
    };
    sendData(data);
}