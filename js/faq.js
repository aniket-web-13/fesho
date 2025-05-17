
// Questions data
let questions = [
    {
        question: "Is my technology allowed on tech?",
        answer: "The home-buying process typically takes 30 to 60 days from the time an offer is accepted, depending on factors like financing, inspections, and the closing process."
    },
    {
        question: "How to soft launch your business?",
        answer: "The typical down payment ranges from 5% to 20% of the purchase price, but it can vary based on the loan type and your financial situation."
    },
    {
        question: "How to turn visitors into contributors",
        answer: "While it's not required to use a real estate agent, they can help with pricing, marketing, and negotiating to get the best deal."
    },
    {
        question: "How can i find my solutions?",
        answer: "Make sure to check the foundation, roof, plumbing, and electrical systems. Also, look for signs of pests, water damage, and structural issues."
    },
];

let faqSec = document.getElementById("faqSec");
faqSec.innerHTML = `
  <div class="padding-section">
      <div class="section-spacing">
          <div class="">
              <div class="faq-main-count">
                  <div class="faq-right">
                      <div class="question-count" id="questionContainer">   
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
`;

let questionContainer = document.getElementById("questionContainer");

questions.forEach((element, i) => {
    let faqBox = document.createElement("div");
    faqBox.classList.add("faq-quest");
    questionContainer.appendChild(faqBox);

    faqBox.innerHTML = `
    <div class="faq-q-top">
        <h2>${element.question}</h2>
        <div class="faq-icon">
            <i class="fa-solid fa-plus icon"></i>
        </div>
    </div>
    <div class="faq-bottom" style="height: 0px; overflow: hidden;">
        <p>There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</p>
    </div>            
  `;
});

let faqQuestionBtn = document.getElementsByClassName("faq-q-top");
let faqAnswer = document.getElementsByClassName("faq-bottom");
let icon = document.getElementsByClassName("icon");

function closeAllFaqs() {
    for (let i = 0; i < faqAnswer.length; i++) {
        faqAnswer[i].style.height = "0px";
        icon[i].classList.remove("fa-minus");
        icon[i].classList.add("fa-plus");
        faqQuestionBtn[i].classList.remove("active-faq");
    }
}

function openFaq(index) {
    const currentFaqAnswer = faqAnswer[index];
    
    const currentIcon = icon[index];
    // console.log(currentFaqAnswer);

    closeAllFaqs();

    currentFaqAnswer.style.height = currentFaqAnswer.scrollHeight + "px";
    // console.log(currentFaqAnswer.style.height = currentFaqAnswer.scrollHeight + "px");
    currentIcon.classList.remove("fa-plus");
    currentIcon.classList.add("fa-minus");
    faqQuestionBtn[index].classList.add("active-faq");
}

for (let i = 0; i < faqQuestionBtn.length; i++) {

    faqQuestionBtn[i].addEventListener("click", () => {
        // console.log(faqAnswer[i].style.height);

        if (faqAnswer[i].style.height !== "0px" && faqAnswer[i].style.height !== "") {
            return;
        }

        openFaq(i);
    });
    // faqQuestionBtn[i].addEventListener("keydown", (e) => {
    //     if (e.key === "Enter") {
    //         openFaq(i);
    //     }
    // });
    // faqQuestionBtn[i].addEventListener("focus", () => {
    //     faqQuestionBtn[i].classList.add("active-faq");
    // });
}

openFaq(0);


