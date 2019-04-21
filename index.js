let css = document.querySelector('h3');

let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
const body = document.getElementById('gradient');

// console.log(color1);console.log(color2);console.log(css)
let gradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ";";

}



color1.addEventListener('input', gradient);
color2.addEventListener('input', gradient);

// color1.addEventListener('input', () => {
//     console.log(color1.value);
// })
// color2.addEventListener('input', () => {
//     console.log(color2.value);
// })
