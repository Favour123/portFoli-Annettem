let navbar = document.querySelector(".navbar");
let inner = document.querySelector(".inner");
let scrollButton = document.querySelector(".scrollButton");
let innerLinks = document.querySelectorAll(".nav-link");
let numbers = document.querySelectorAll(".number");

window.onscroll = function() {
    myFunction();
};

function myFunction() {
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
        scrollButton.classList.add("show");
        innerLinks.forEach(function(link) {
            link.classList.add("text-dark");
        });
    } else {
        navbar.classList.remove("scrolled");
        scrollButton.classList.remove("show");
        innerLinks.forEach(function(link) {
            link.classList.remove("text-dark");
        });
    }
}




for (const lir of innerLinks) {
      lir.addEventListener("click", () =>{
            lir.style.borderBottom = "  2px solid red"
            setTimeout(() => {
                  lir.style.borderBottom = "none"; 
            }, 1000);
         
      })
}

function isViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function fadeInScroll() {
    const textElements = document.querySelectorAll('.fadein');
    textElements.forEach((el) => {
        if (isViewport(el)) {
            el.classList.add('tracking-in-expand-fwd-bottom');
            el.style.visibility =  'visible';
        }
    });
}
function fadeInScrollTop() {
    const textElements = document.querySelectorAll('.fadein-top');
    textElements.forEach((el) => {
        if (isViewport(el)) {
            el.classList.add('text-blur-out');
            el.style.visibility =  'visible';
        }
    });
    const textElement = document.querySelectorAll('.slidein');
    textElement.forEach((el) => {
        if (isViewport(el)) {
            el.classList.add('scale-out-hor-left');
            el.style.visibility =  'visible';
        }
    });
}

window.addEventListener("scroll", fadeInScroll);
fadeInScroll(); // Initially check if any elements are in the viewport
window.addEventListener("scroll", fadeInScrollTop);
fadeInScrollTop(); // Initially check if any elements are in the viewport


