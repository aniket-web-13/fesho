

let navNesParent = document.getElementsByClassName("nav-nes-parent");
let navNesChild = document.getElementsByClassName("nav-nes-link");

navNesParent[0].addEventListener("mouseover", () => {
   navNesChild[0].style.display = "block"
})
navNesParent[0].addEventListener("mouseleave", () => {
   navNesChild[0].style.display = "none"
})

/* let navNesParent = document.getElementsByClassName("nav-nes-parent");
let navNesChild = document.getElementsByClassName("nav-nes-link");

Array.from(navNesParent).forEach((parent, index) => {
    parent.addEventListener("mouseover", () => {
        navNesChild[index].style.display = "block";
    });
    parent.addEventListener("mouseleave", () => {
        navNesChild[index].style.display = "none";
    });
}); */

/* ======================================================================== */
/* braedcrumb */

function Breadcrumbs(path) {
   const breadcrumbContainer = document.querySelector('.breadcrumb');
   // console.log(breadcrumbContainer);  

   const pathSegments = path.split('/');
   // console.log(pathSegments); 

   breadcrumbContainer.innerHTML = pathSegments.map((segment, index) => {
      // console.log(pathSegments);

      if (index === pathSegments.length - 1) { 

         return `<li>${segment.slice(0, 5)}</li>`;  

      } else {
         const href = pathSegments.slice(0, index + 1).join('/');

         // console.log(href, pathSegments.slice(0, index + 1));

         return `<li><a href="${href}">${segment}</a></li>`;  
      }
   }).join(''); 

   // console.log(path);
}

