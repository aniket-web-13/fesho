let testimoniMainBox = document.getElementById("testimoniMainBox");
// console.log(testimoniMainBox);

let clientData = [
  {
    src: "./assets/media/jpg/fardin-Sayyad.jpg",
    name: "Fardin Sayyad",
    post: "Founder of Mali.AI",
  },
  {
    src: "./assets/media/jpg/jhon-d.jpg",
    name: "Kartik .B",
    post: "Ceo",
  },
  {
    src: "./assets/media/jpg/jhon-d.jpg",
    name: "Hashimi .s",
    post: "office Boy",
  },
  {
    src: "./assets/media/jpg/jhon-d.jpg",
    name: "Moin .s",
    post: "Watchmen",
  },
  {
    src: "./assets/media/jpg/jhon-d.jpg",
    name: "Humair .s",
    post: "Manager",
  },
  {
    src: "./assets/media/jpg/jhon-d.jpg",
    name: "Jonny Lala",
    post: "Ass Manager",
  },
];

clientData.map((value) => {
  testimoniMainBox.innerHTML += `
  
  <div class="testimoni-in-client ">
      <div class="tc-inner-count">
          <div class="tc-info">
              <div class="tc-row">
                  <div class="of-row star">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                  </div>
                   <h4 class="dm">${value.name}</h4>
                  <p>${value.post}</p>
              </div>
              <div class="tc-img">
                  <img src="${value.src}" alt="">
              </div>
              <div class="hr"></div>
              <div class="tc-content">
                  <p>Promptitude is not only a duty, it is favorable to fortune, reputation, influence, a little attention and energy will form the habit, so as to make it easy and delightful.</p>
              </div>
              <div class="flat-icon">
                  <img src="./assets/media/png/left-quote.png" alt="">
              </div>
          </div>
      </div>
  </div>
  
  `;
});

/* testimoni card carousal */

// let slideIndex = 0;

function changeTestCard() {
  let testCards = document.getElementsByClassName("testimoni-in-client");
  let testBtns = document.getElementsByClassName("test-btn");

  function handleClick(index) {

    for (let i = 0; i < testCards.length; i++) {
      testCards[i].style.transform = "translateX(0)";
    }

    if (index === 0) {
      for (let i = 0; i < testCards.length; i++) {
        testCards[i].style.transform = "translateX(0)";
      }
    } else if (index === 1) {
      for (let i = 0; i < testCards.length; i++) {
        testCards[i].style.transform = "translateX(-980px)";
      }
    } else if (index === 2) {
      for (let i = 0; i < testCards.length; i++) {
        testCards[i].style.transform = "translateX(-1945px)";
      }
    }

    for (let i = 0; i < testBtns.length; i++) {
      testBtns[i].style.backgroundColor = i === index ? "#164333" : "";
    }
  }

  for (let i = 0; i < testBtns.length; i++) {
    testBtns[i].addEventListener("click", () => handleClick(i));
  }

  setInterval(() => {
    slideIndex++;
  }, 1000);
}

changeTestCard();


