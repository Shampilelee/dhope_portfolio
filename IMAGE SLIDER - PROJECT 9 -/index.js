
// IMAGE SLIDER

// THIS WILL RETURN A NodeList OF OUR IMAGES
const slides = document.querySelectorAll(".slides img");

let slide_Index = 0;
let interval_Id = null;


function initialize_Slider() {

    // CHECK IF WE HAVE SLIDES
    if (slides.length > 0) {
        slides[slide_Index].classList.add("display_Slide");

        // goto next slide EVERY 5 SECONDS
        interval_Id = setInterval(next_Slide, 5000);
    } 
}

// wait for all images to be loaded in DOM BEFORE showing image
document.addEventListener("DOMContentLoaded", initialize_Slider)


function show_Slide(index) {

    // RESET THE SLIDES, WHEN WE GET TO THE END OF OUR SLIDES
    if (index >= slides.length) {
        slide_Index = 0;
    } 
    else if(index < 0) {
        slide_Index = slides.length - 1;
    }
    
    // remove the current slide from the screen
    slides.forEach( slide => {
        slide.classList.remove("display_Slide");
    });

    // add new slide to the screen
    slides[slide_Index].classList.add("display_Slide");
}


function prev_Slide() {
    // STOP THE SLIDING
    clearInterval(interval_Id);

    slide_Index--;
    show_Slide(slide_Index);
}


function next_Slide() {
    slide_Index++;
    show_Slide(slide_Index);
}















































