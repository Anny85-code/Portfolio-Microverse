const navMenu = document.getElementById('menu-bar');

const toggleSideBar = false;

 
const closeBtn = document.querySelector('.aside-close');

 const closeButton = false;

const getSideBar = document.querySelector('.nav-menu');

navMenu.addEventListener ('click', function() {
 
   if(toggleSideBar === false) {
       getSideBar.style.visibility = "visible";
   }

});

closeBtn.addEventListener ('click', function(){

  if(closeButton === false){

     getSideBar.style.visibility = "hidden";
  }
})