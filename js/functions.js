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

function createBreadcrumb(path) {
  const breadcrumbContainer = document.querySelector(".breadcrumb");
  breadcrumbContainer.innerHTML = "";
  const pathSegments = path.split("/").filter(Boolean);

  pathSegments.pop();

  const homeLi = document.createElement("li");
  homeLi.innerHTML = `<a href="/">Home</a>`;
  breadcrumbContainer.appendChild(homeLi);
  // console.log(homeLi);

  pathSegments.forEach((segment, index) => {
    const isLast = index === pathSegments.length - 1;
    console.log(index === pathSegments.length - 1);

    const li = document.createElement("li");

    if (isLast) {
      li.textContent = segment;
      console.log(segment);
    } else {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      li.innerHTML = `<a href="${href}">${segment}</a>`;
    }

    breadcrumbContainer.appendChild(li);
  });
}


