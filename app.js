var button = document.querySelector(".begin");
var selector = document.getElementById("breaths");
var breathNum = document.getElementById("breath-num");
var animation = document.getElementById("animation");
var instructions = document.getElementById("instructions");
var animate = null;
let breathed = 0;
let n = 1;
breathNum.innerHTML = n;

selector.addEventListener("change", () => {
    n = selector.value
    showBreaths(n) 
});

function showBreaths(val) {
    breathNum.innerHTML = val;
}

const breathIn = () => {
        animation.className = "breathin";
        instructions.innerHTML = "Take a deep breath";
        n = n - 1;
              showBreaths(n);
}

const breathOut = () => {
        animation.className = "breathout";
        instructions.innerHTML = "Breath out slowly";
        

}

const hold = () => {
        instructions.innerHTML = "Hold your breath";
}

function breath() {
            setTimeout(() => {
              breathIn()
            }, 3000);
            setTimeout(() => {
               hold()
            }, 6000);
           setTimeout(() => {
              breathOut()
            }, 10000);
}

function meditate() {
    animate = setInterval (() => {
        console.log(n);
        if (n === 0) {
            clearInterval(animate);
            instructions.innerHTML = "Breathing session is over. Please select a number of breath and press Begin to start a new session"
            button.classList.remove("button-inactive");
        } else if (n > 0) {
        breath()
        }
    }, 12500)
}

button.addEventListener("click", () => {
    
    button.classList.add("button-inactive");
    console.log(button.className)
    instructions.innerHTML = "Get ready to breath";
    setTimeout(() => {
        instructions.innerHTML = "breathing will start now";
    }, 2000);

    setTimeout(() => {
        breathIn()
      }, 3000);
      setTimeout(() => {
         hold()
      }, 6000);
     setTimeout(() => {
        breathOut()
      }, 9000);

    meditate()
});
