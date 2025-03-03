function click() {
   return console.log("helllo");

}

let navNesParent = document.getElementsByClassName("nav-nes-parent");console.log(navNesParent);
let navNesChild = document.getElementsByClassName("nav-nes-link");console.log(navNesChild);

navNesParent[0].addEventListener("mouseover", ()=>{
   navNesChild[0].style.display= "block"
})
navNesParent[0].addEventListener("mouseleave", ()=>{
   navNesChild[0].style.display= "none"
})