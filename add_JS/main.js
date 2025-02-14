//lay phan tu
const button = document.getElementById("change");
const cat = document.getElementById("cat");

//tao ham random
// const randomColor = function () {
//     return Math.floor(Math.random() * 361);
// };

//doi mau
// cat.style.filter = "hue-rotate(30deg)";

button.addEventListener("click", function () {
    const color = Math.floor(Math.random() * 361);
    // console.log(color);
    cat.style.filter = `hue-rotate( ${color}deg)`;
});
