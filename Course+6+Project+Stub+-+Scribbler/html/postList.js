
var child;
var container= document.querySelector('.container');

function showmodal(one){
    document.querySelector('.overlay1').classList.add('showoverlay1');
    document.querySelector('.modalContainer').classList.add('showmodalcontainer');
   child=one.parentElement.parentElement.parentElement;
}
function showmodal1(two){
    document.querySelector('.overlay1').classList.add('showoverlay1');
    document.querySelector('.modalContainer').classList.add('showmodalcontainer');
   child=two.parentElement.parentElement.parentElement;
}
function showmodal1(three){
    document.querySelector('.overlay1').classList.add('showoverlay1');
    document.querySelector('.modalContainer').classList.add('showmodalcontainer');
   child=three.parentElement.parentElement.parentElement;
}
function showmodal1(four){
    document.querySelector('.overlay1').classList.add('showoverlay1');
    document.querySelector('.modalContainer').classList.add('showmodalcontainer');
   child=four.parentElement.parentElement.parentElement;
}
function showmodal1(five){
    document.querySelector('.overlay1').classList.add('showoverlay1');
    document.querySelector('.modalContainer').classList.add('showmodalcontainer');
   child=five.parentElement.parentElement.parentElement;
}

function closemodal(){
    document.querySelector('.overlay1').classList.remove('showoverlay1');
    document.querySelector('.modalContainer').classList.remove('showmodalcontainer');
}
function yes(){
    // var container= document.querySelector('.container');
    container.removeChild(child);
   closemodal();
}
function thirdpage() {
    window.location.href='/Post/post.html';
}


