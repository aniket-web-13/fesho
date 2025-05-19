
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

// const breadcrumbCont = document.getElementById("breadcrumbCont");
// breadcrumbCont.innerHTML = `
   
//  `;