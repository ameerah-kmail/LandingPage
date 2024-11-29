/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navbarList=document.createDocumentFragment();
const sections=document.querySelectorAll('section');
sections.forEach(section=>{
    const navItem=document.createElement('li');
    const anchor=document.createElement('a');
    anchor.textContent=section.getAttribute('data-nav');
    anchor.href=`#${section.id}`;
    anchor.classList.add('menu__link');
    navItem.appendChild(anchor);
    navbarList.appendChild(navItem);
});
document.getElementById('navbar__list').appendChild(navbarList);

const navbarSmooth=document.getElementById('navbar__list');
navbarSmooth.addEventListener('click',
    event=>{
        if(event.target.tagName ==='A'){
            event.preventDefault();
            const targetSection=document.querySelector(event.target.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });

        }
    }
);

document.addEventListener("scroll", function() { makeActive();});

function makeActive(){
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        const link=document.querySelector(`a[href="#${section.id}"]`);
        if (box.top <= 150 && box.bottom >= 150 ) {
            section.classList.add('your-active-class');
            link.classList.add('active-link');
        } else {
            section.classList.remove('your-active-class');
            link.classList.remove('active-link');
        }
     }
}

let isScrolling;
const navbar=document.querySelector('.page__header');
document.addEventListener('scroll',
    ()=>{
        navbar.style.display= 'block';
        clearTimeout(isScrolling);
        isScrolling=setTimeout(()=>{
            navbar.style.display= 'none';
        },2000);
    }
);

const scrollToTopBtn= document.querySelector('#scrollToTop');
document.addEventListener("scroll", function() { displayScrollToTop();});
function displayScrollToTop(){
    if(window.scrollY>window.innerHeight){
        scrollToTopBtn.style.display='block';
    }
    else{
        scrollToTopBtn.style.display='none';
    }
}
scrollToTopBtn.addEventListener('click',
    ()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    }
);

//Making sections collapsible
const landingContainer=document.querySelectorAll('.landing__container');
const lessSymbols=document.querySelectorAll('h3');
const articles=document.querySelectorAll('article');
for(let i=0;i<lessSymbols.length;i++){
    lessSymbols[i].addEventListener('click',function (){
        if(lessSymbols[i].textContent==='-'){
            articles[i].style.display='none';
            articles[i].style.maxHeight="0";
            lessSymbols[i].textContent="+";
        }else{
            articles[i].style.display='block';
            articles[i].style.maxHeight="750px";
            lessSymbols[i].textContent="-";   
        }
    });
}
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


