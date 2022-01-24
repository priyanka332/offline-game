const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        },300)
    }
}

let isAlive = setInterval(function() {
    let Score = score.innerText++
    //  Get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    
    //  Get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")
    );

    //  Detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert(`Ooppsss!! **Game Over** Snow man is melt because of fire 🥺🥺!! Your total Score is: ${Score}. 🥺`)
    }
},10);

document.addEventListener("keydown",function(event) {
    jump();
})