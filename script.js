const header=document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY>0);

});
let menu=document.querySelector('menu-icon');
let nav=document.querySelector('.nav');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}