


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

let currentNumber = 0;  // Start number
const targetNumber = 100;  // Target number
const speed = 70;  // Time interval to increase number (milliseconds)
const numberElement = document.getElementById("number");

// Function to update the number
function updateNumber() {
  if (currentNumber <= targetNumber) {
    numberElement.textContent = currentNumber;
    currentNumber++;
  } else {
    clearInterval(runnerInterval); // Stop the animation when the target is reached
  }
}

// Start the number running (update every 'speed' milliseconds)
const runnerInterval = setInterval(updateNumber, speed);
