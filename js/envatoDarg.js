// Envato Drag and Drop Slider
let dragBox = document.getElementsByClassName("drag-box")[0];
let draggable = document.getElementsByClassName("drag-count")[0];
let pressed = false;
let startX;
let currentX;

draggable.style.left = '0px';

dragBox.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - draggable.offsetLeft;
    dragBox.style.cursor = "grabbing";
});

dragBox.addEventListener("mouseenter", () => {
    if (!pressed) dragBox.style.cursor = "grab";
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

    currentX = e.offsetX;
    draggable.style.left = `${currentX - startX}px`;

    boundItems();
});

dragBox.addEventListener("touchstart", (e) => {
    pressed = true;
    startX = e.touches[0].clientX - draggable.offsetLeft;
    dragBox.style.cursor = "grabbing";
});

dragBox.addEventListener("touchmove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    currentX = e.touches[0].clientX;
    draggable.style.left = `${currentX - startX}px`;

    boundItems();
});

dragBox.addEventListener("touchend", () => {
    pressed = false;
    dragBox.style.cursor = "grab";
});
