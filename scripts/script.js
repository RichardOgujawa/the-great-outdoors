console.log(
    `%cCoding Project #3`, `background-color:#eee`,

    `

Welcome to the third coding project, which is a design I found initially on Pinterest. It was a repost of a website done by Piotr Adam Kwiatkowski. The coding didn't take too long to do, but I did have to design parts of the site myself because the original design only included the desktop version of the website, and it also didn't include any of the pages the site links to. Hope you like it.
    `
)

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
        mobileNav.style.transform = "translateX(calc(-100% - 3px))";
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

function fnBrowserDetect(){
    let userAgent = navigator.userAgent;

    if(userAgent.match(/opr\//i)){
        scrollToTop.style.display = "none";
    } else {
        scrollToTop.style.display = "block";
    }
}

fnBrowserDetect();