// items hightlight
// click category
// arr newhot
let arrNewHot = [];

let arrInfo = [];
let arrUpdate = [];
let arrEvent = [];
fetch ("./assets/data/news.json")
    .then(function (response) {
        return response.json();
    })
    // data nhan du lieu tu return phia trc 
    .then(function (data){
        for (let i = 0; i < data.length; i++) {
            arrNewHot.push(data[i]);
            if (data[i].category == "Info") {
                arrInfo.push(data[i]);
            }
            if (data[i].category == "Update") {
                arrUpdate.push(data[i]);
            }
            if (data[i].category == "Event") {
                arrEvent.push(data[i]);
            }
        }
    })
    .then(function() {
        loadNew();
        loadAdvise();
        loadOld();
        loadEvent();
    })

const itemsNewHot = document.querySelector("#newsHot > ul");
function loadNew(n = 5) {
    itemsNewHot.innerHTML = "";
    for (let i = 0; i < n; i++) {
        let str = `
            <!-- news hot ${i} -->
            <li class=""><a href="">
                <div class="news__img">
                    <img src="${arrNewHot[i].thumbnailLink}" alt="">
                </div>
                <div class="news__info">
                    <h3> ${arrNewHot[i].title} </h3>
                    <p> ${arrNewHot[i].desc} </p>
                </div>
                <div class="news__meta">
                    <p class="date"> ${arrNewHot[i].date} </p> `;
        switch (arrNewHot[i].category) {
            case "Info":
                str += "<p class='support yellow'> Thông tin </p>";
            break;
            case "Update":
                str += "<p class='support blue'> Bản tin </p>";
            break;
            case "Event":
                str += "<p class='support green'> Sự kiện </p>";
            break;
        }
        str += `</div>
            </a></li>
        `;
        itemsNewHot.innerHTML += str;
    }
}

const itemsNewAdvise = document.querySelector("#newsAdvise > ul");
function loadAdvise(n = 5) {
    itemsNewAdvise.innerHTML = "";
    for (let i = 0; i < n; i++) {
        let str = `
            <!-- news hot ${i} -->
            <li class=""><a href="">
                <div class="news__img">
                    <img src="${arrInfo[i].thumbnailLink}" alt="">
                </div>
                <div class="news__info">
                    <h3> ${arrInfo[i].title} </h3>
                    <p> ${arrInfo[i].desc} </p>
                </div>
                <div class="news__meta">
                    <p class="date"> ${arrInfo[i].date} </p>
                    <p class="support yellow"> Thông tin </p>
                </div>
            </a></li>
        `;
        itemsNewAdvise.innerHTML += str;
    }
}

const itemsNewOld = document.querySelector("#newsOld > ul");
function loadOld(n = 5) {
    itemsNewOld.innerHTML = "";
    for (let i = 0; i < n; i++) {
        let str = `
            <!-- news hot ${i} -->
            <li class=""><a href="">
                <div class="news__img">
                    <img src="${arrUpdate[i].thumbnailLink}" alt="">
                </div>
                <div class="news__info">
                    <h3> ${arrUpdate[i].title} </h3>
                    <p> ${arrUpdate[i].desc} </p>
                </div>
                <div class="news__meta">
                    <p class="date"> ${arrUpdate[i].date} </p>
                    <p class="support blue"> Bản tin </p>
                </div>
            </a></li>
        `;
        itemsNewOld.innerHTML += str;
    }
}

const itemsNewEvent = document.querySelector("#newsEvent > ul");
function loadEvent(n = 5) {
    itemsNewEvent.innerHTML = "";
    for (let i = 0; i < n; i++) {
        let str = `
            <!-- news hot ${i} -->
            <li class=""><a href="">
                <div class="news__img">
                    <img src="${arrEvent[i].thumbnailLink}" alt="">
                </div>
                <div class="news__info">
                    <h3> ${arrEvent[i].title} </h3>
                    <p> ${arrEvent[i].desc} </p>
                </div>
                <div class="news__meta">
                    <p class="date"> ${arrEvent[i].date} </p>
                    <p class="support green"> Sự kiện </p>
                </div>
            </a></li>
        `;
        itemsNewEvent.innerHTML += str;
    }
}


let n0 = 5; 
let n1 = 5;
let n2 = 5;
let n3 = 5;
const viewmore = document.querySelectorAll(".viewmore");
viewmore[0].addEventListener("click", function() {
    n0 += 5;
    if (n0 > arrNewHot.length) n0 = arrNewHot.length;
    loadNew(n0); 
})

viewmore[1].addEventListener("click", function() {
    n1 += 5;
    if (n1 > arrInfo.length) n1 = arrInfo.length;
    loadAdvise(n1); 
})

viewmore[2].addEventListener("click", function() {
    n2 += 5;
    if (n2 > arrUpdate.length) n2 = arrUpdate.length;
    loadOld(n2); 
})

viewmore[3].addEventListener("click", function() {
    n3 += 5;
    if (n3 > arrEvent.length) n3 = arrEvent.length;
    loadEvent(n3); 
})


function resetAll() {
    n0 = 5;
    loadNew(5);
    n1 = 5;
    loadAdvise(5);
    n2 = 5;
    loadOld(5);
    n3 = 5;
    loadEvent(5);
}
    var i;
    var tabcontent , tablinks;
    tablinks = document.querySelectorAll(".tablink-js");
    tabcontent = document.querySelectorAll(".tabcontent-js");

function openNew(evt,newCategory) {
    var i;
    resetAll();
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(newCategory).style.display = "block";
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}

// slideshow new highlight (mobile tablet)
var tabSlide__highlight = document.querySelectorAll(".item__highlight-js")
var tablink_highlight_dot = document.querySelectorAll(".btn-dot__item")
var btnNext_Hightlight = document.querySelector(".btn__news-hl--next");
var btnPrev_Hightlight = document.querySelector(".btn__news-hl--prev");

var slideHightlightIndex = 0;
btnNext_Hightlight.addEventListener("click" , function(){
    slideHightlightIndex++;
    if(slideHightlightIndex >= tabSlide__highlight.length){
        slideHightlightIndex = 0;
    }
    for(let i=0 ; i<tabSlide__highlight.length ; i++){
        tabSlide__highlight[i].style.display = "none";
    }
    tabSlide__highlight[slideHightlightIndex].style.display = "block";
    for(let j=0 ; j<tablink_highlight_dot.length ; j++){
        tablink_highlight_dot[j].classList.remove("active_dot");
    }
    tablink_highlight_dot[slideHightlightIndex].classList.add("active_dot");
})

btnPrev_Hightlight.addEventListener("click" , function(){
    slideHightlightIndex--;
    if(slideHightlightIndex < 0){
        slideHightlightIndex = tabSlide__highlight.length-1;
    }
    for(let i=0 ; i<tabSlide__highlight.length ; i++){
        tabSlide__highlight[i].style.display = "none";
    }
    tabSlide__highlight[slideHightlightIndex].style.display = "block";
    for(let j=0 ; j<tablink_highlight_dot.length ; j++){
        tablink_highlight_dot[j].classList.remove("active_dot");
    }
    tablink_highlight_dot[slideHightlightIndex].classList.add("active_dot");
})

for(let dotHightlightCurrent=0 ; dotHightlightCurrent<tablink_highlight_dot.length ; dotHightlightCurrent++){
    tablink_highlight_dot[dotHightlightCurrent].addEventListener("click" , function(){
        slideHightlightIndex = dotHightlightCurrent;
        for(let i=0 ; i<tabSlide__highlight.length ; i++){
            tabSlide__highlight[i].style.display = "none";
        }
        tabSlide__highlight[dotHightlightCurrent].style.display = "block";
        
        for(let j=0 ; j<tablink_highlight_dot.length ; j++){
            tablink_highlight_dot[j].classList.remove("active_dot");
        }
        tablink_highlight_dot[dotHightlightCurrent].classList.add("active_dot");
        
    })
}

// click languages footer
const languagesWrap = document.querySelector(".js-languages-wrap")
const listLanguagesClick = document.querySelector(".footer__languages")
const listLanguagesItems = document.querySelector(".list__languages")
        var x= true ;
        
        function showHideLanguages () {
            if(x) {
                languagesWrap.style.display = "none";               
                x= false;
            } else {
                languagesWrap.style.display = "block";    
                x= true ;
            }
        }
        
        listLanguagesClick.addEventListener ("click",showHideLanguages);

        listLanguagesClick.addEventListener("click",function(event){
            event.stopPropagation()
        })

        listLanguagesItems.addEventListener("click",function(event){
            event.stopPropagation()
        })

// Click Login header (modal)
// phần modal-login
const loginHead = document.querySelector(".js-login")
const modal = document.querySelector(".js-modal")
const modalContainer = document.querySelector(".js-modalContainer")
const modalClose =document.querySelector(".js-modal-close")

// hàm hiển thị modal login (thêm class open vào modal)
function showModalLogin () {
    modal.classList.add("open")
}

// hàm ẩn modal login (xóa class open khỏi của modal)
function hideModalLogin () {
    modal.classList.remove("open")
}

// nghe hành vi click vào phần login trên header
loginHead.addEventListener ("click", showModalLogin)

// nghe hành vi click vào phần close trong modal
modalClose.addEventListener ("click",hideModalLogin)

modal.addEventListener("click",hideModalLogin )
// click vào bên trong phần cần sd ko bị ẩn đi 
modalContainer.addEventListener ("click", function(event) {
    event.stopPropagation()
})

// click viewmore (error)
// menu tablet-mobile
var menu_header = document.querySelector(".header-nav__menu")
var navMenu_header = document.querySelector(".nav")
var closeMenu = document.querySelector(".nav__close .fa-times")
var mainModel = document.querySelector(".js-main")
menu_header.addEventListener("click",function showMenu(){
    // navMenu_header.style.display = "block"
    navMenu_header.classList.add("block")
})

closeMenu.addEventListener("click",function hideMenu(){
    // navMenu_header.style.display = "none"
    navMenu_header.classList.remove("block")
})
// co phan ic langguages
mainModel.addEventListener("click",function hideMenu(){
    languagesWrap.style.display = "none"
})

menu_header.addEventListener("click",function(event){
    event.stopPropagation()
})

navMenu_header.addEventListener("click",function(event){
    event.stopPropagation()
})
