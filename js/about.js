


// function Breadcrumbs(path) {
//     let navName = document.getElementsByClassName("navName")
//     console.log(navName);  

//     const breadcrumbContainer = document.querySelector('.breadcrumb');
//     console.log(breadcrumbContainer);

//     const pathSegments = path.split('/');
//     console.log(pathSegments);

//     breadcrumbContainer.innerHTML = pathSegments.map((segment, index) => {
        
//         if (index === pathSegments.length - 1) {
//             console.log(segment);
//             return `<li>${segment}</li>`;
//         } else {
//             const href = '/' + pathSegments.slice(0, index + 1).join('/');

//             console.log(pathSegments.slice(0, index + 1));
            
//             return `<li><a href="${href}">${segment}</a></li>`;
//         }

//     }).join('');

//     console.log(path);

// }

// Breadcrumbs(window.location.pathname);

/* Number Runner  */

let currentNumber = 0;
// Start number
const targetNumber = 6420;
// Target number
const speed = 1;
// Time interval to increase number (milliseconds)
const numberElement = document.getElementById("number");

function updateNumber() {
  if (currentNumber <= targetNumber) {
    numberElement.textContent = currentNumber;
    currentNumber++;
  } else {
    clearInterval(runnerInterval); 
  }
}

const runnerInterval = setInterval(updateNumber, speed);
