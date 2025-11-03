document.addEventListener("DOMContentLoaded", function () {
  // Section 1 Cards
  let secCardsCount = document.getElementById("secCardsCount");

  let secCardsInfo = [
    {
      src: "./assets/media/png/cards-sec-1.webp",
      title: "Quality Organic Food Store",
      bgColor: "#f8ca38",
      color: "#164333",
    },
    {
      src: "./assets/media/png/cards-sec-2.webp",
      title: "Healthy Products Everyday",
      bgColor: "#43aa5c",
      color: "#ffff",
    },
    {
      src: "./assets/media/png/cards-sec-3.webp",
      title: "Pure Natural Products",
      bgColor: "#164333",
      color: "#ffff",
    },
  ];

  if (secCardsCount) {
    secCardsInfo.forEach((value) => {
      secCardsCount.innerHTML += `
      <div style="background-color:${value.bgColor}" class="card-count relative">
          <div class="card-info">
              <div><p style="color:${value.color}" class="pop pt">100% Organic</p></div>
              <h3 style="color:${value.color}" class="sch-h3">${value.title}</h3>
              <button class="cards-btn">shop now</button>
          </div>
          <div class="card-img">
              <img src="${value.src}" alt="">
          </div>
      </div>`;
    });
  } else {
    console.error("Element with ID 'secCardsCount' not found.");
  }

  // Categories Cards
  let catCardCount = document.getElementById("catCardCount");

  let catCardsData = [
    {
      backSrc: "./assets/media/png/cat-1-bg.webp",
      src: "./assets/media/jpg/cat-veg-1.jpg",
      title: "Vegetables",
    },
    {
      backSrc: "./assets/media/png/cat-2-bg.webp",
      src: "./assets/media/jpg/cat-fru-2.jpg",
      title: "Fresh Fruits",
    },
    {
      backSrc: "./assets/media/png/cat-3-bg.png",
      src: "./assets/media/jpg/cat-spi-3.jpg",
      title: "Spices",
    },
    {
      backSrc: "./assets/media/png/cat-4-bg.webp",
      src: "./assets/media/jpg/cat-dri-4.jpg",
      title: "Dried Products",
    },
  ];

  if (catCardCount) {
    catCardsData.forEach((value) => {
      catCardCount.innerHTML += `
      <div class="cat-card relative">
          <div style="background-image: url(${value.backSrc});" class="cat-bg"></div>
          <div class="cir-img">
              <a href="#"><img src="${value.src}" alt=""></a>
          </div>
          <div class="cat-card-info">
              <h4><a class="dm" href="#">${value.title}</a></h4>
              <p> When nothing prevents our to we like best be. </p>
          </div>
      </div>`;
    });
  } else {
    console.error("Element with ID 'catCardCount' not found.");
  }

  // News Section
  let nsCardCount = document.getElementById("nsCardCount");

  let newsArtData = [
    { src: "./assets/media/jpg/news-home-1.jpg" },
    { src: "./assets/media/jpg/news-home-2.jpg" },
    { src: "./assets/media/jpg/news-home-3.jpg" },
  ];

  if (nsCardCount) {
    newsArtData.forEach((value) => {
      nsCardCount.innerHTML += `
      <div class="na-card">
          <div class="na-img">
              <img src="${value.src}" alt="">
          </div>
          <div class="ns-info">
              <ul>
                  <li><img src="./assets/media/png/user.png" alt=""><p>by Admin</p></li>
                  <li>/</li>
                  <li><img src="./assets/media/png/bubble-chat.png" alt=""><p>2 Comments</p></li>
              </ul>
              <h4 class="dm">
                  <a href="#">Which healthy food growth strategies required</a>
              </h4>
              <div class="text pop">Duis aute irure dolor lipsum simply free text the local markets</div>
              <button class="read-btn">read more</button>
          </div>
      </div>`;
    });
  } else {
    console.error("Element with ID 'nsCardCount' not found.");
  }

  // Optional: Log sdClearfix
  let sdClearfix = document.getElementById("sdClearfix");
  // console.log("sdClearfix:", sdClearfix);

  const serviceItems = [
  {
    text: "Fast home delivery",
  },
  {
    text: "Secure Payments",
  },
  {
    text: "Delivering best products",
  },
  {
    text: "Food Inspections",
  },
  {
    text: "Generator Systems",
  },
  {
    text: "Assessments",
  },
];

  if (sdClearfix) {
    serviceItems.forEach((item) => {
      sdClearfix.innerHTML += `
          <div class="single-item dm">
              <i class="fa-solid fa-circle-check"></i>
              <h6>${item.text}</h6>
          </div>`;
    });
  } else {
    console.error("Element with ID 'sdClearfix' not found.");
  }
});
