document.querySelector('.colorbtn').addEventListener("click", changeColor)

function changeColor(e) {

    const button = document.querySelector('.colorbtn');
    button.classList.toggle("blackBg1");
    const svg = document.querySelector("#curvita path");
    svg.classList.toggle("blackfill");
    const card = document.querySelector(".card2");
    card.classList.toggle("blackBg");
    const card1 = document.querySelector(".card3");
    card1.classList.toggle("blackBg");
    const card2 = document.querySelector(".card4");
    card2.classList.toggle("blackBg");
    const card3 = document.querySelector(".card5");
    card3.classList.toggle("blackBg");
    // const card4 = document.querySelector(".card6");
    // card4.classList.toggle("blackBg");
    const par = document.querySelector(".card-text");
    par.classList.toggle("blackTextBg");
    const par1 = document.querySelector(".ct2");
    par1.classList.toggle("blackTextBg");
    const par2 = document.querySelector(".ct3");
    par2.classList.toggle("blackTextBg");
    const par3 = document.querySelector(".ct4");
    par3.classList.toggle("blackTextBg");
    const sec2 = document.querySelector("#sec2");
    sec2.classList.toggle("whiteBg");
    const cur2 = document.querySelector("#curvita1 path");
    cur2.classList.toggle("blackfill");
    const con2 = document.querySelector("body");
    con2.classList.toggle("whiteBg");
    const more = document.querySelector(".more");
    more.classList.toggle("whiteTextBg");
    const head = document.querySelector(".heading");
    head.classList.toggle("whiteTextBg");
    const head1 = document.querySelector(".heading1");
    head1.classList.toggle("whiteTextBg");
    const p1 = document.querySelector(".p1");
    p1.classList.toggle("whiteTextBg");
    const p2 = document.querySelector(".p2");
    p2.classList.toggle("whiteTextBg");
    const svg1 = document.querySelector(".loadbtn");
    svg1.classList.toggle("whiteTextBg");
    // const dot = document.querySelector(".slick-dots li button:before");
    // dot.classList.toggle("blackBg");
    // console.log(par.classList)

    e.preventDefault();
};

document.querySelector('.navbar').addEventListener("click", borderTop)

function borderTop(e) {

    const button = document.querySelector('.colorbtn');
    button.classList.add("borderTop");
    e.preventDefault();
};