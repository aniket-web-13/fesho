let featData = [
    {
        src:"/assets/media/jpg/banana.jpg",
        title:"Bananas",
    },
    {
        src:"/assets/media/jpg/potato.jpg",
        title:"Potatos",
    },
    {
        src:"/assets/media/jpg/apple.jpg",
        title:"Apples",
    },
    {
        src:"/assets/media/jpg/lettus.jpg",
        title:"Lettus",
    },
]
let featCardCount = document.getElementById("featCardCount");
// console.log(featCardCount);

featData.map((value) => {
    featCardCount.innerHTML += `
    
    <div class="feat-card relative">
        <div class="f-card-img relative">
            <img src="${value.src}" alt="">
        </div>
        <div class="cat-card-info fc-info">
            <h4><a class="dm" href="#">${value.title}</a></h4>
            <p class="pop">$32.00</p> 
            <div class="of-row star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
        <div class="fc-lt">
            <a href="#" class="fc-icon"><i class="fa-solid fa-heart"></i></a>
            <a href="#" class="fc-icon"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
    </div>

    `
})

// features data //
let featuresData = [
    {
        icon:`<i class="fa-solid fa-sack-dollar"></i>`,
        tit:"Return Policy",
        desc:"Money back guarantee",
    },
    {
        icon:`<i class="fa-solid fa-ship"></i>`,
        tit:"Free Shipping",
        desc:"On all orders over $60.00",
    }, 
    {
        icon:`<i class="fa-solid fa-seedling"></i>`,
        tit:"Store Locator",
        desc:"Find your nearest store",
    }, 
    {
        icon:`<i class="fa-solid fa-shield-halved"></i>`,
        tit:"Secure Payments",
        desc:"You're on safe and secure",
    },
]
let featuresBox = document.getElementById("featuresBox");
// console.log(featuresBox);

featuresData.map((value) => {
    featuresBox.innerHTML += `
    
    <div class="features-block">
        <div class="ft-icon star">
            ${value.icon}
        </div>
        <div class="ft-cont">
            <h5 class="dm"><a href="#">${value.tit}</a></h5>
            <p>${value.desc}</p>
        </div>
    </div>

    `
})


