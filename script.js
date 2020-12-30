var player = document.getElementById("player");
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;
var currentBlocks = [];

function moveLeft(){
    var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if(left>0){
        player.style.left = left - 2 + "px";
    }
}
function moveRight(){
    var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if(left<380){
        player.style.left = left + 2 + "px";
    }
}
document.addEventListener("keydown", event => {
    if(both==0){
        both++;
        if(event.key==="ArrowLeft"){
            interval = setInterval(moveLeft, 1);
        }
        if(event.key==="ArrowRight"){
            interval = setInterval(moveRight, 1);
        }
    }
});
document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
});