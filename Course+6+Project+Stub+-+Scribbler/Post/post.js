var allcmt=document.querySelector('.allcmt');
var lik=document.querySelector('.lik');
var count=0;
var like= document.querySelector('.like');
var edit= document.querySelector('.edit');
var save= true;
var discription=document.querySelector('.discription');
var para=document.querySelector('.para');
var updated=document.querySelector('.updated');
var updted=document.querySelector('.updted');


function fun1(text){
    allcmt.innerHTML=`<p class="cmtsec">${text.value}</p>`+allcmt.innerHTML;
}
function fun2(){
    count++;
    lik.innerHTML=` ${count} person liked this!`;
    like.innerHTML='<i class="fa-solid fa-thumbs-up" ></i> liked ';
}
function fun3(){
    if(save) {
        edit.innerHTML=' save <i class="fa-regular fa-floppy-disk"></i>';
        
        discription.style.border='1px solid pink';
        para.style.border='1px solid pink';
        para.contentEditable='true';
        discription.contentEditable='true';
        updated.innerHTML='';
        updted.innerHTML='';
        save=false;
    }else{
        edit.innerHTML= 'Edit <i class="fa-solid fa-pen-to-square"></i>';
       
        discription.style.border='none';
        para.style.border='none';
        para.contentEditable= "false";
        discription.contentEditable='false';
        updated.innerHTML=' UPDATED:';
        updted.innerHTML='UPDATED: ';
        save = true;

    }
}