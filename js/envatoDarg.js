
let dragBox = document.querySelector(".drag-box");
// console.log(dragBox);

let draggable = document.querySelector(".drag-count");
// console.log(draggable);

let item = document.querySelector(".item");
// console.log(item);


let pressed = false;
let startX;
let x;

dragBox.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.offsetX - draggable.offsetLeft;
  dragBox.style.cursor = "pointer";
  // console.log(startX);  
});

dragBox.addEventListener("mouseenter", () => {
  dragBox.style.cursor = "pointer";
});

dragBox.addEventListener("mouseup", () => {
  pressed = false;
});


let boundItems = () => {
  let outer = dragBox.getBoundingClientRect();
  let inner = draggable.getBoundingClientRect();

 
  if (parseInt(draggable.style.left) > 0) {
    draggable.style.left = "0px";
  }

  if (inner.right < outer.right) {
    draggable.style.left = `-${inner.width - outer.width}px`;
  }
};

// console.log(boundItems());

dragBox.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();
  
    x = e.offsetX;
    draggable.style.left = `${x - startX}px`;
  
    boundItems(); 
  });