//select page-top section element
let landingpage = document.querySelector(".page-top");
//get arrey of imags
let imagsArray = ["image1", "image2", "image3"];

setInterval(() => {
  //GET Random Number
  let randomNuber = Math.floor(Math.random() * imagsArray.length);
  
  //change background  image url
  landingpage.style.backgroundImage =
    `url("./imgs/backgrounds/${imagsArray[randomNuber]}.jpeg")`;
}, 5000);
