var url = "http://localhost:3000/";
var data = {
    "book_ID": null,
    "author_first_name": null,
    "author_last_name": null,
    "book_name": null,
    "genre": null,
    "publish_date": null,
    "checked_out": null,
    "date_checked_out": null,
    "date_returned": null
};

function sendData(){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", getInfo);
    xhr.open("POST", url, true);
    
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("data=" + JSON.stringify(data));
}

function getInfo(){
    var info = this.responseText;
    console.log(info);
    displayInfo(info);
}

function displayInfo(text){
    document.getElementById('header').innerHTML = text;
}