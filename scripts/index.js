import data from "../resources/data/dataset.index.js";

const nextbutton = document.getElementById('nextbutton');
const prevbutton = document.getElementById('prevbutton');
const cards = document.querySelectorAll('#card');
const main = document.querySelector('.main')
const container = document.querySelector('.carousell')
const body = document.getElementById('body');
const button = document.getElementById('explore-button');
// const header = document.querySelector('.container');

const cardbutton = document.getElementById('card');
const display = document.querySelector('.display')
const aboutcontent = document.getElementById('about-content');
const backbutton = document.querySelector('.back-button');
const con = document.querySelector('.container')
//index
const subtextindex = document.querySelector('.content-smalltitle');
const titleindex = document.querySelector('.content-title');
const descriptionindex = document.querySelector('.content-description');

//About
const subtextabout = document.querySelector('.about-subtitle');
const titleabout = document.querySelector('.about-title');
const exploretext = document.querySelector('#exploretext');
const abouttext = document.querySelector('.about-p3');
const activitytext = document.querySelectorAll('.activity-p1');
const activitydesc = document.querySelectorAll('.hover-box');

//About pictures
const headerpicture = document.querySelector('.about-header');
const pircture1 = document.querySelector('.about-img-1');
const act = document.querySelectorAll('.about-activity-card');

let a = 0
const firstcountry = "japan";

changehomepage(firstcountry)

function changehomepage(country) {

    if(country == "canada"){
        con.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    }else{
        con.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    }

    const coun = data.countries[country];
    const url = '../resources/images/About';

    subtextindex.innerText = coun.tourist;
    titleindex.innerText = coun.country;
    descriptionindex.innerText = coun.description;

    subtextabout.innerText = coun.tourist;
    titleabout.innerText = coun.country;
    headerpicture.style.backgroundImage = `url('${url}/${country}/header.jpg')`;
    pircture1.src = `${url}/${country}/history.jpg`;

    exploretext.innerText = coun.about.explore;
    abouttext.innerText = coun.about.history;

    let i = 0
    while (i !== 4) {

        activitytext[i].innerText = coun.activities[i].name;
        activitydesc[i].innerText = coun.activities[i].description;
        act[i].style.backgroundImage = `url('${url}/${country}/act${i+1}.jpg')`;
        i++
    }
    
}

button.addEventListener('click', () => {
    display.style.display = "block";
    body.scrollTo({
        top: 1000,
        behavior: 'smooth'
    })
    // setTimeout(()=>{header.style.display = "none";},500)
})

backbutton.addEventListener('click', () => {
    body.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

function carousell() {
    cards.forEach((card, index) => {
        const no = card.getAttribute('data-no');
        const country = card.getAttribute('data-country');
        const av = a == 10 ? 0 : a;
        if (no == av) {
            card.classList.add("active");
            main.style.backgroundImage = `url('${card.src}')`;
            changehomepage(country)
        } else {
            card.classList.remove("active");
        }
    })
}


nextbutton.addEventListener('click', nextcard)
prevbutton.addEventListener('click', prevcard)

function nextcard() {
    if (a !== 9) {
        container.scrollLeft += 204;

        a += 1
        carousell()
    }
}

function prevcard() {
    if (a !== 0) {
        container.scrollLeft -= 204;

        a -= 1
        carousell()
    }
}

// function cardprev() {
//     const v = cards[a - 1];
//     container.removeChild(cards[a - 1])
//     container.insertBefore(v, container.childNodes[0]);
//     console.log(cards)
// }


// function cardaction() {
//     if(a !== 4){
//         if(a >= 2){
//             container.scrollLeft += a==2?200:208;
//         }else{
//             container.scrollLeft += 210;
//         }
//     }
// }

// aboutcontent.addEventListener('scroll',()=>{
//     navbar.classList.remove("navbar-glass");

//     if(aboutcontent.scrollTop > 0){
//         navbar.classList.add("navbar-glass");
//         // console.log(navbar)
//     }
// })

    // if (a === 5) {
    //     a = 0
    //     cardaction()
    // }

    // cardaction()