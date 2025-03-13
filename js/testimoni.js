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
  
  <div class="testimoni-in-client relative">
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
  let testCard = document.getElementsByClassName("testimoni-in-client");
  console.log(testCard);

  let testBtn = document.getElementsByClassName("test-btn");
  console.log(testBtn);

  testBtn[0].addEventListener("click", () => {
    testCard[0].classList.add("testShow");
    testCard[0].classList.remove("testHide");
    testCard[1].classList.add("testShow");
    testCard[1].classList.remove("testHide");
  });

  // testBtn.forEach((btn, i) => {
  //   btn.addEventListener("click", () => {
  //     return btn.classList.toggle("test-tog");
  //   });
  //   console.log(btn);
  // });
}

changeTestCard();
