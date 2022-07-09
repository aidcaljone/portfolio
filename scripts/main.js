
const images = document.querySelectorAll(".gallery-img img");
let imgSrc;

// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        console.log(imgSrc)
    });
});
