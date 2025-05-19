let navNesParent = document.getElementsByClassName("nav-nes-parent");
let navNesChild = document.getElementsByClassName("nav-nes-link");

navNesParent[0].addEventListener("mouseover", () => {
  navNesChild[0].style.display = "block";
});
navNesParent[0].addEventListener("mouseleave", () => {
  navNesChild[0].style.display = "none";
});

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

/*function Breadcrumbs(path) {
  const breadcrumbContainer = document.querySelector(".breadcrumb");
  // console.log(breadcrumbContainer);

  const pathSegments = path.split("/");
  // console.log(pathSegments);

  breadcrumbContainer.innerHTML = pathSegments
    .map((segment, index) => {
      // console.log(pathSegments);

      if (index === pathSegments.length - 1) {
        return `<li>${segment.slice(0, 5)}</li>`;
      } else {
        const href = pathSegments.slice(0, index + 1).join("/");
        console.log(pathSegments.slice(0, index + 1).join("/"));

        console.log(href, pathSegments.slice(0, index + 1));

        return `<li><a href="${href}">${segment}</a></li>`;
      }
    })
    .join("");

  // console.log(path);
  // console.log(window.location.pathname);
}*/



let serviceList = [
  {
    src: "/assets/media/png/sl-card-veg.png",
    title: "Vegetables",
    bg: "#E3EEE5",
  },
  {
    src: "/assets/media/png/sl-card-berry.png",
    title: "Fresh Fruits",
    bg: "#F0E2E3",
  },
  {
    src: "/assets/media/png/sl-card-dryFrut.png",
    title: "Dry Fruits",
    bg: "#F0ECE0",
  },
  {
    src: "/assets/media/png/sl-card-dryFrut.png",
    title: "Organic Store",
    bg: "#F0ECE0",
  },
  {
    src: "/assets/media/png/sl-card-berry.png",
    title: "Dairy Products",
    bg: "#E3EEE5",
  },
  {
    src: "/assets/media/png/sl-card-veg.png",
    title: "Dry Fruits",
    bg: "#F0E2E3",
  },
];

let serviceBox = document.getElementById("serviceListBox");
let dynamicStyles = document.getElementById("dynamicServiceStyles");
let newContent = '"Updated: "';

serviceList.forEach((item, index) => {
  const uniqueClass = `sl-card-box-${index}`;
  serviceBox.innerHTML += `
    <div class="sl-card-box ${uniqueClass}">
      <div class="sl-body relative">
        <div class="sl-text dm">
          <div class="sl-card-img">
            <img src="${item.src}" alt="">
          </div>
          <h4><a href="#">${item.title}</a></h4>
          <p>When nothing prevents our and makers of natural and organic products to we best be.</p>
          <a href="#" class="sl-arr-btn" style="background-color: ${item.bg};">
            <img class="sl-arr" src="/assets/media/png/long-arrow-pointing-to-the-right.png" alt="">
          </a>
        </div>
      </div>
    </div>
  `;

  dynamicStyles.textContent += `
    .${uniqueClass} .sl-body::before,
    .${uniqueClass} .sl-text::before {
      background: ${item.bg};
    }
  `;
});
