function signupmodal(){
    document.querySelector('.overlay1').classList.add('showoverlay1');
    document.querySelector('.signup-form').classList.add('showsignup-form');
}
function closesignupmodal(){
    document.querySelector('.overlay1').classList.remove('showoverlay1');
    document.querySelector('.signup-form').classList.remove('showsignup-form');
}
var btnsignup=document.querySelector(".signup");
signup.addEventListener("click",signupmodal);

var closesignup=document.querySelector(".close1");
closesignup.addEventListener("click",closesignupmodal );

function signinmodal(){
    document.querySelector('.overlay1').classList.add('showoverlay1');
    document.querySelector('.signin-form').classList.add('showsignin-form');
}
function closesigninmodal(){
    document.querySelector('.overlay1').classList.remove('showoverlay1');
    document.querySelector('.signin-form').classList.remove('showsignin-form');
}
var btnsignin=document.querySelector(".signin");
signup.addEventListener("click",signinmodal);

var closesignup=document.querySelector(".close2");
closesignup.addEventListener("click",closesigninmodal );
function switch1 () {
    document.querySelector('.overlay1').classList.remove('showoverlay1');
    document.querySelector('.signin-form').classList.remove('showsignin-form');
    document.querySelector('.overlay1').classList.add('showoverlay1');
    document.querySelector('.signup-form').classList.add('showsignup-form');
}
function all_post() {
    window.location.href='./html/postslist.html';
}
function opencreatepage(){
   
        document.querySelector('.overlay1').classList.add('showoverlay1');
        document.querySelector('.createpostspage').classList.add('showcreatepostspage');
}


function closecreate(){
    document.querySelector('.overlay1').classList.remove('showoverlay1');
    document.querySelector('.createpostspage').classList.remove('showcreatepostspage');
}