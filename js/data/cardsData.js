// section 1 cards data //
let secCardsCount = document.getElementById("secCardsCount");
// console.log(secCardsCount);

let secCardsInfo = [
  {
    src: "./assets/media/png/cards-sec-1.webp",
    title: "Quality Organic Food Store",
    bgColor: "#f8ca38",
    color: "164333",
  },
  {
    src: "./assets/media/png/cards-sec-2.webp",
    title: "Healthy Products Everyday",
    bgColor: "#43aa5c",
    color: "#ffff",
  },
  {
    src: "./assets/media/png/cards-sec-3.webp",
    title: "Organic Pure Natural Products",
    bgColor: "#164333",
    color: "#ffff",
  },
];

secCardsInfo.map((value) => {
  secCardsCount.innerHTML += `
    
    <div style="background-color:${value.bgColor}" class="card-count relative">
        <div class="card-info">
            <div><p style="color:${value.color}" class="pop pt">100% Organic</p></div>
            <h3 style="color:${value.color}" class="sch-h3">${value.title}</h3>
            <button class="cards-btn">shope now</button>
        </div>
        <div class="card-img">
            <img src="${value.src}" alt="">
        </div>
    </div>   

    `;
});

// Categories section cards //
let catCardCount = document.getElementById("catCardCount");
// console.log(catCardCount);

let catCardsData = [
  {
    backSrc: "./assets/media/png/cat-1-bg.webp",
    src: "./assets/media/jpg/cat-veg-1.jpg",
    title: "Vegetables",
    link: "",
  },
  {
    backSrc: "./assets/media/png/cat-2-bg.webp",
    src: "./assets/media/jpg/cat-fru-2.jpg",
    title: "Fresh Fruits",
    link: "",
  },
  {
    backSrc: "./assets/media/png/cat-3-bg.png",
    src: "./assets/media/jpg/cat-spi-3.jpg",
    title: "Spices",
    link: "",
  },
  {
    backSrc: "./assets/media/png/cat-4-bg.webp",
    src: "./assets/media/jpg/cat-dri-4.jpg",
    title: "Dried Products",
    link: "",
  },
];

catCardsData.map((value) => {
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
  </div>

  `;
});


let nsCardCount = document.getElementById("nsCardCount");

let newsArtData = [
  {
    src:"./assets/media/jpg/news-home-1.jpg",    
  },
  {
    src:"./assets/media/jpg/news-home-2.jpg",    
  },
  {
    src:"./assets/media/jpg/news-home-3.jpg",    
  },
]

newsArtData.map((value) => {
  nsCardCount.innerHTML += `
  
    <div class="na-card">
        <div class="na-img">
            <img src="${value.src}" alt="">
        </div>
        <div class="ns-info">
            <ul>
                <li><img src="./assets/media/png/user.png" alt=""><p>by Admin</p></li>
                <li>&#47;</li>
                <li><img src="./assets/media/png/bubble-chat.png" alt=""><p>2 Comments</p></li>
            </ul>
            <h4 class="dm">
                <a href="#">Which healthy food growth strategies required</a>
            </h4>
            <div class="text pop">Duis aute irure dolor lipsum simply free text the local markets</div>
            <button class="read-btn">read more</button>
        </div>
    </div>

  `
})



let serviceList = [
  {
    src:"/assets/media/png/sl-card-veg.png",
    title:"Vegetables",
    para:"When nothing prevents our and makers of natural and organic products to we best be.",
  },
  {
    src:"/assets/media/png/sl-card-berry.png",
    title:"",
    para:""
  },
   {
    src:"/assets/media/png/sl-card-dryFrut.png",
    title:"",
    para:""
  },
   {
    src:"/assets/media/png/sl-card-dryFrut.png",
    title:"",
    para:""
  },
   {
    src:"/assets/media/png/sl-card-berry.png",
    title:"",
    para:""
  },
   {
    src:"/assets/media/png/sl-card-veg.png",
    title:"",
    para:""
  },
]