
const images = document.querySelectorAll(".gallery-img");
let imgSrc;

// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        console.log(imgSrc)
    });
});

//creating the modal
let imgModal = () => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");

    //add the modal to the main section or the parent element
    document.querySelector(".gallery-container").append(modal);
};

imgModal();

//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add the modal to the main section or the parent element
    document.querySelector(".main").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    modal.append(newImage)
};
