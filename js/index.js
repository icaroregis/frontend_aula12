let show = true; 
const showMenu = document.querySelector('.showMenu');   
const buttonMenuHeader = document.querySelector('.buttonMenuHeader');   

buttonMenuHeader.addEventListener('click', () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  showMenu.classList.toggle("on", show); 
  show = !show;  
})  