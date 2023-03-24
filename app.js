const circle_icon=document.querySelector('#nav-bar .nav-bar .nav-list .circle');
const nav_list=document.querySelector('#nav-bar .nav-bar .nav-list');

circle_icon.addEventListener('click',()=>{
  nav_list.classList.toogle('open');
  circle_icon.classList.toggle('active');  
})
