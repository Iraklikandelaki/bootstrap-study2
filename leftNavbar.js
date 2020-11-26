
let navbar = document.querySelector(".nav-sidebar");
let toggler = document.querySelector(".btn-toggle-nav");
let navbarUl = document.querySelector(".nav-sidebar ul");
let toRight = document.querySelector(".nav-sidebar.to-right");
let dumbOverlay = document.querySelector(".dumb-overlay");


let navbar2 = document.querySelector(".nav-sidebar2");
let toggler2 = document.querySelector(".btn-toggle-nav2");
let navbarUl2 = document.querySelector(".nav-sidebar2 ul");
let toDown = document.querySelector(".nav-sidebar2.to-down");





let toggleNav = () => {
    navbar.classList.toggle("to-right");
    toggler.classList.toggle("opened");
    dumbOverlay.classList.toggle("opened");
    
}

let checkNav = () => {
    if(navbar.classList.contains("to-right")){
        setTimeout(() => {
            navbarUl.style.opacity = "1"; 
           }, 550);
           console.log("hey")
    } else {
        navbarUl.style.opacity = "0";
        console.log("byeeee")
    }
}




let clickAnywhere = (e) => {
  e.stopPropagation();
  navbar.classList.remove("to-right");
  dumbOverlay.classList.remove("opened");
  toggler.classList.remove("opened");


  navbar2.classList.remove("to-down");
  toggler2.classList.remove("opened");
}




let toggleNav2 = () => {
    navbar2.classList.toggle("to-down");
    toggler2.classList.toggle("opened");
    dumbOverlay.classList.toggle("opened");
    
}

let checkNav2 = () => {
    if(navbar2.classList.contains("to-down")){
        setTimeout(() => {
            navbarUl2.style.opacity = "1"; 
           }, 550);
           console.log("hey")
    } else {
        navbarUl2.style.opacity = "0";
        console.log("byeeee")
    }
}




// let clickAnywhere = (e) => {
//   e.stopPropagation();
//   navbar.classList.remove("to-right");
//   dumbOverlay.classList.remove("opened");
//   toggler.classList.remove("opened");
// }








dumbOverlay.addEventListener("click", clickAnywhere)
toggler.addEventListener("click", toggleNav);
toggler.addEventListener("click", checkNav);

toggler2.addEventListener("click", toggleNav2);
toggler2.addEventListener("click", checkNav2);


