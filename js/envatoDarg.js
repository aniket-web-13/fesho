




let dragBox = document.getElementsByClassName("drag-box");
// console.log(dragBox);

let draggable = document.getElementsByClassName("drag-count");
// console.log(draggable);

let item = document.querySelector(".item");
// console.log(item);

let pressed = false;
let startX;
let x;

dragBox[0].addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.offsetX - draggable[0].offsetLeft;
  dragBox[0].style.cursor = "pointer";
  // console.log(startX);
});

dragBox[0].addEventListener("mouseenter", () => {
  dragBox[0].style.cursor = "pointer";
});

dragBox[0].addEventListener("mouseup", () => {
  pressed = false;
});

let boundItems = () => {
  let outer = dragBox[0].getBoundingClientRect();
  let inner = draggable[0].getBoundingClientRect();

  if (parseInt(draggable[0].style.left) > 0) {
    draggable[0].style.left = "0px";
  }

  if (inner.right < outer.right) {
    draggable[0].style.left = `-${inner.width - outer.width}px`;
  }
};

// console.log(boundItems());

dragBox[0].addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;
  draggable[0].style.left = `${x - startX}px`;

  boundItems();
});
