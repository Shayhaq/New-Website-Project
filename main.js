/*hamburger menu*/ 
const navSlide = () => {
    
    
    let menu = document.querySelector(".menu");
    let nav = document.querySelector("#nav-bar");
    let navLinks = document.querySelectorAll("nav li");
    /*Menu Toggle Function*/
    menu.addEventListener('click', () =>{
   
    nav.classList.toggle("menu-active");
    /*Link animation*/
    navLinks.forEach((link, index) =>{
    
      if   (link.style.animation)  {
            link.style.animation = ``;     
      } else {
            link.style.animation = `menuSlide 0.2s ease forwards ${index / 7 + 0.1}s`;     
       }
      
     });

     menu.classList.toggle('toggle');
  });
}

navSlide();