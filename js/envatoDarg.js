// let dragBox = document.getElementsByClassName("drag-box");
// // console.log(dragBox);

// let draggable = document.getElementsByClassName("drag-count");
// // console.log(draggable);

// let item = document.querySelector(".item");
// // console.log(item);

// let pressed = false;
// let startX;
// let x;

// dragBox[0].addEventListener("mousedown", (e) => {
//   pressed = true;
//   startX = e.offsetX - draggable[0].offsetLeft;
//   dragBox[0].style.cursor = "pointer";
//   // console.log(startX);
// });

// dragBox[0].addEventListener("mouseenter", () => {
//   dragBox[0].style.cursor = "pointer";
// });

// dragBox[0].addEventListener("mouseup", () => {
//   pressed = false;
// });

// let boundItems = () => {
//   let outer = dragBox[0].getBoundingClientRect();
//   let inner = draggable[0].getBoundingClientRect();

//   if (parseInt(draggable[0].style.left) > 0) {
//     draggable[0].style.left = "0px";
//   }

//   if (inner.right < outer.right) {
//     draggable[0].style.left = `-${inner.width - outer.width}px`;
//   }
// };

// // console.log(boundItems());

// dragBox[0].addEventListener("mousemove", (e) => {
//   if (!pressed) return;
//   e.preventDefault();

//   x = e.offsetX;
//   draggable[0].style.left = `${x - startX}px`;

//   boundItems();
// });

let dragBox = document.getElementsByClassName("drag-box")[0];
let draggable = document.getElementsByClassName("drag-count")[0];
let pressed = false;
let startX;
let x;

dragBox.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - draggable.offsetLeft;
    dragBox.style.cursor = "grabbing";
});

dragBox.addEventListener("mouseenter", () => {
    dragBox.style.cursor = "grab";
});

dragBox.addEventListener("mouseup", () => {
    pressed = false;
    dragBox.style.cursor = "grab";
});

dragBox.addEventListener("mouseleave", () => {
    pressed = false;
    dragBox.style.cursor = "grab";
});

const boundItems = () => {
    let outer = dragBox.getBoundingClientRect();
    let inner = draggable.getBoundingClientRect();

    if (parseInt(draggable.style.left) > 0) {
        draggable.style.left = "0px";
    }

    if (inner.right < outer.right) {
        draggable.style.left = `-${inner.width - outer.width}px`;
    }
};

dragBox.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    draggable.style.left = `${x - startX}px`;

    boundItems();
});

// Optional: Add touch events for mobile support
dragBox.addEventListener("touchstart", (e) => {
    pressed = true;
    startX = e.touches[0].clientX - draggable.offsetLeft;
    dragBox.style.cursor = "grabbing";
});

dragBox.addEventListener("touchmove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.touches[0].clientX;
    draggable.style.left = `${x - startX}px`;

    boundItems();
});

dragBox.addEventListener("touchend", () => {
    pressed = false;
    dragBox.style.cursor = "grab";
});