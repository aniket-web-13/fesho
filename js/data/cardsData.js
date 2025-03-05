// section 1 cards data //
let secCardsCount = document.getElementById("secCardsCount");
console.log(secCardsCount);

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

// let secCardsInfo =[
//     {
//         src:"./assets/media/png/cards-sec-1.webp",
//         title:"Quality Organic Food Store",
//         bgColor:"#f8ca38",
//         color:"164333",
//     },
//     {
//         src:"./assets/media/png/cards-sec-2.webp",
//         title:"Healthy Products Everyday",
//         bgColor:"#43aa5c",
//         color:"#fffff",
//     },
//     {
//         src:"./assets/media/png/cards-sec-3.webp",
//         title:"OrganicPure Natural Products",
//         bgColor:"#164333",
//         color:"#fffff",
//     },
// ]
