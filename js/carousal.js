let aboutDrag = document.getElementsByClassName("ab-drag-img");
console.log(aboutDrag);

function AboutDrag() {

    for (let i = 0; i < aboutDrag.length; i++) {
        let overlyHover = document.getElementsByClassName("overly-hov")[i];
        console.log(overlyHover.scrollLeft);

        aboutDrag[i].addEventListener("mouseenter", () => {
            overlyHover.style.transform = "translateX(0px)";
        });

        aboutDrag[i].addEventListener("mouseleave", () => {
            overlyHover.style.transform = "translateX(393px)";
            resetOverlyHoverPosition(overlyHover);
        })
        console.log(aboutDrag[i]);
    }
}

function resetOverlyHoverPosition(overlyHoverElement) {
    overlyHoverElement.style.transform = "translateX(-362px)";
    overlyHoverElement.style.zIndex = "2"
}

AboutDrag();


/* about page scrool X function */


const carousal = document.querySelector('.about-carousal');
let isDragStart = false, isStartX, scrollLeft;
let autoSlideInterval;
// const slideSpeed = 1;  
// const slideInterval = 3000; 

const startDragging = (e) => {
    isDragStart = true;
    isStartX = e.type === 'mousedown' ? e.pageX - carousal.offsetLeft : e.touches[0].pageX - carousal.offsetLeft;
    scrollLeft = carousal.scrollLeft;
    clearInterval(autoSlideInterval);
};

const stopDragging = () => {
    isDragStart = false;
    autoSlide();
};

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    const x = e.type === 'mousemove' ? e.pageX - carousal.offsetLeft : e.touches[0].pageX - carousal.offsetLeft;
    const distance = x - isStartX;
    carousal.scrollLeft = scrollLeft - distance;
};

const autoSlide = () => {
    // autoSlideInterval = setInterval(() => {
    //     carousal.scrollLeft += slideSpeed;
    //     if (carousal.scrollLeft >= carousal.scrollWidth - carousal.clientWidth) {
    //         carousal.scrollLeft = 0;
    //     }
    // }, slideInterval);  
    isStartX = Math.abs(isStartX);
    let firstImgWidth = carousal.clientWidth + 14;
    let valueDiff = firstImgWidth - isStartX;

    if (carousal.scrollLeft > valueDiff) {
        return carousal.scrollLeft += isStartX > firstImgWidth / 4 ? valueDiff : -isStartX;
    }
    carousal.scrollLeft -= isStartX > firstImgWidth / 4 ? valueDiff : -isStartX;

};
console.log(carousal.scrollWidth - carousal.clientWidth);
autoSlide();

// Mouse events
carousal.addEventListener('mousedown', startDragging);
carousal.addEventListener('mouseleave', stopDragging);
carousal.addEventListener('mouseup', stopDragging);
carousal.addEventListener('mousemove', dragging);

// Touch events
carousal.addEventListener('touchstart', startDragging);
carousal.addEventListener('touchend', stopDragging);
carousal.addEventListener('touchmove', dragging);


