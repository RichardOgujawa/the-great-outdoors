const mobileNav= document.querySelector('#mobile-nav-container');
const nav = document.querySelector('nav');
let navToggler = true;
const body = document.querySelector('body');

const popUpVid = document.querySelector('video');
const popUpVidContainer = document.querySelector('#pop-up-video-container');
console.log(popUpVidContainer);

const scrollToTop = document.querySelector('#scroll-to-top');

//Nav Toggle
function navToggle(){
    navToggler = !navToggler;
 
    if(navToggler){
        mobileNav.style.transform = "translateX(-100%)";
    }
    else {
        mobileNav.style.transform = "translateX(0%)";
    }
}

//Menu + ScrolLToTop Button Animation on Window Scroll
window.addEventListener("scroll", ()=>{
let scrollTop = Math.floor(window.scrollY);
    if(scrollTop >= 500){
    scrollToTop.style.transform = "translate(-50%, 0%)";
    }
    if (scrollTop >= 20) {
        nav.style.backgroundImage = "linear-gradient(to bottom, #000, #0009 120%)";
        nav.style.height = "10vh";

    } else {
        nav.style.backgroundImage = "none";
        nav.style.height = "15vh";
        scrollToTop.style.transform = "translate(-50%, 300%)";
    }
});

//Pop Up Video
function playButton(){
    body.style.overflowY = "hidden";
    popUpVidContainer.style.display = "flex";
    scrollToTopFunc();
    setTimeout(()=> 
    {
        popUpVid.style.transform = "translateY(0px)"
        popUpVid.style.opacity = "1";
    }, 
    25);
}

function scrollToTopFunc(){
    window.scrollTo(0,0);
}

function closePopUpVid(){
    body.style.overflowY = "scroll";
    popUpVid.style.transform = "translateY(50px)"
    popUpVid.style.opacity = "0";
    setTimeout( ()=>{
    popUpVidContainer.style.display = "none";}, 150
    )
    popUpVid.pause();
}



