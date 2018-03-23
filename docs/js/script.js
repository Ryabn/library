var url = "http://localhost:3000/";

function sendData(data){
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

function redirectAdd(){
    window.location = 'addBook.html';
}
function redirectRemove(){
    window.location = 'removeBook.html';
}

function load(){
    document.getElementById('display-name').innerHTML = "Welcome, " + "{{name}}" + "!";
}