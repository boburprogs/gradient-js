
document.querySelector(".card").addEventListener("click", () => {
    let deg = Math.floor(Math.random() * 360)
    let color1 = randomColor()
    let color2 = randomColor() 
    
    document.body.style.background = `linear-gradient(${deg}deg, ${color1} 50%,   ${color2} 50%)`;

    document.querySelector("p").textContent =  `linear-gradient(${deg}deg, ${color1} 50%,   ${color2} 50%)`;
})

function randomColor() {
      
let hexCode = "0123456789abcdef";
let color = "#";
for (i = 0; i < 6; i++){
    let number = Math.floor(Math.random() * hexCode.length);
    color += hexCode[number];
  }
   return color;
}