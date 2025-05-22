// let navNesParent = document.getElementsByClassName("nav-nes-parent");
// let navNesChild = document.getElementsByClassName("nav-nes-link");

// navNesParent[0].addEventListener("mouseover", () => {
//   navNesChild[0].style.display = "block";
// });
// navNesParent[0].addEventListener("mouseleave", () => {
//   navNesChild[0].style.display = "none";
// });

// Handle main nav dropdowns (e.g. "pages")
const navNesParents = document.querySelectorAll(".nav-nes-parent");

navNesParents.forEach(parent => {
  const dropdown = parent.querySelector(".nav-nes-link");

  if (dropdown) {
    parent.addEventListener("mouseover", () => {
      dropdown.style.display = "block";
    });
    parent.addEventListener("mouseleave", () => {
      dropdown.style.display = "none";
    });
  }
});


// ham btn
const isMobile = () => window.innerWidth <= 768; // or any mobile breakpoint

// Toggle submenus on click for mobile
document.querySelectorAll(".nav-nes-parent").forEach((parent) => {
  const trigger = parent.querySelector("a, .nav-m");
  const dropdown = parent.querySelector(".nav-nes-link");

  if (!trigger || !dropdown) return;

  // Desktop: Hover
  parent.addEventListener("mouseenter", () => {
    if (!isMobile()) dropdown.style.display = "block";
  });
  parent.addEventListener("mouseleave", () => {
    if (!isMobile()) dropdown.style.display = "none";
  });

  // Mobile: Click
  trigger.addEventListener("click", (e) => {
    if (isMobile()) {
      e.preventDefault();
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }
  });
});

// Toggle nested "services" submenu
const serviceNavParent = document.getElementById("serNes");
const serviceDropdown = serviceNavParent?.querySelector(".service-nav-nes");

if (serviceNavParent && serviceDropdown) {
  // Desktop hover
  serviceNavParent.addEventListener("mouseenter", () => {
    if (!isMobile()) serviceDropdown.style.display = "block";
  });
  serviceNavParent.addEventListener("mouseleave", () => {
    if (!isMobile()) serviceDropdown.style.display = "none";
  });

  // Mobile click
  serviceNavParent.querySelector("a").addEventListener("click", (e) => {
    if (isMobile()) {
      e.preventDefault();
      serviceDropdown.style.display = serviceDropdown.style.display === "block" ? "none" : "block";
    }
  });
}

const hamBtn = document.querySelector(".hamBtn");
const navRight = document.getElementById("navRight");

hamBtn.addEventListener("click", () => {
  navRight.classList.toggle("open");
});



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
