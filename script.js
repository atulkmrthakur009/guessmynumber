"use strict";
let score = 20;
let highScore = 0;
let secretNumber = Math.ceil(Math.random() * 20);

document.querySelector(".check").addEventListener("click",function(){
    let guess = Number(document.querySelector(".guess").value);
    let message = document.querySelector(".message").textContent;
    if(!guess){
        document.querySelector(".message").textContent = "⛔️ No number!";
    }else if(guess === secretNumber){
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        document.querySelector(".number").style.width = "60rem";
        document.querySelector(".number").textContent = guess;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if(score > highScore){
            highScore = score
            document.querySelector(".highscore").textContent = highScore;
        }
    }else{
        score--;
        if(score >= 0){
            document.querySelector(".message").textContent = (guess > secretNumber ? "📈 Too high!" : '📉 Too low!');
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = '💥 You lost the game!';
            document.querySelector(".score").textContent = score;
        }
    }
});

document.querySelector(".again").addEventListener("click",function(){
    document.querySelector(".guess").value = "";
    score = 20;
    secretNumber = Math.ceil(Math.random() * 20);
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = "20";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector('body').style.backgroundColor = '#222';
})