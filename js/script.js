let menuBtn = document.getElementById("menu-btn");
let menuBar = document.getElementById("menu-bar");
let cancleBtn = document.getElementById("cancle-btn");
let yearText = document.getElementById("year-text");

menuBtn.addEventListener("click", () => {
    menuBar.classList.toggle("active");
});

cancleBtn.addEventListener("click", () => {
    menuBar.classList.toggle("active");
});

const hideIt = () => {
    menuBar.classList.toggle("active");
};

// To show year in last line
const getYear = new Date().getFullYear();
yearText.innerText = `${getYear}`;