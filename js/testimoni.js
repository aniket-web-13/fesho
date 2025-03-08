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
