particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

function signup(){
    window.location = 'signup.html';
}

function login(){
    //
    var authenticated = false;
    if(authenticated){
        window.location = 'index.html';
    }else{
        shake(document.getElementById('shakes'), 10);
        document.getElementById('user').style.border = '3px solid red';
        document.getElementById('pass').style.border = '3px solid red';
    }
}

function shake(e, amt){
    var val = 50;
    for(i = amt; i >= 0; i--){
        slideInleft(i, amt, val, e);
    }
    for(i = 0; i <= amt; i++){
        slideOutleft(i, amt, val, e);
    }
    for(i = amt; i >= 0; i--){
        slideInleft(i, amt, val, e);
    }
}
function slideInleft(i, amt, val, e){
    setTimeout(function(){
            e.style.left = 'calc(50vw - 2' + parseInt(val+=i) + 'px)';
    }, 5*(amt-i));
}
function slideOutleft(i, amt, val, e){
    setTimeout(function(){
            e.style.left = 'calc(50vw - 2' + parseInt(val-=i) + 'px)';
    }, 5*(amt-i) + 100);
}