let testBtn = document.querySelectorAll(".test-btn");
console.log(testBtn);

let currentBtn;

for (let i = 0; i < testBtn.length; i++) {
//   const element = testBtn[i];

  testBtn[i].addEventListener("click", () => {
    testBtn[i].classList.toggle("test-tog");
  });
  console.log(testBtn[i]);
}

let testimoniMainBox = document.getElementById("testimoniMainBox");
console.log(testimoniMainBox);


let clientData = [
  {
    src:"./assets/media/jpg/jhon-d.jpg",
    name:"Fardin Sayyad",
    post:"Co founder",    
  },
  {
    src:"./assets/media/jpg/jhon-d.jpg",
    name:"Kartik .B",
    post:"Ceo",    
  },
  {
    src:"./assets/media/jpg/jhon-d.jpg",
    name:"Aniket .B",
    post:"Employe",    
  },
  {
    src:"./assets/media/jpg/jhon-d.jpg",
    name:"Hashimi .s",
    post:"office Boy",    
  },
  {
    src:"./assets/media/jpg/jhon-d.jpg",
    name:"Moin .s",
    post:"Watchmen",    
  },
  {
    src:"./assets/media/jpg/jhon-d.jpg",
    name:"Humair .s",
    post:"Manager",    
  },
  {
    src:"./assets/media/jpg/jhon-d.jpg",
    name:"Jonny Lala",
    post:"Ass Manager",    
  },
]

clientData.map((value) =>{
  testimoniMainBox.innerHTML +=`
  
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
  
  `
}) 