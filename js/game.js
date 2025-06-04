// game.js
const canvas = document.getElementById('cartonix-game');
if(canvas){
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "#c99b5b";
    ctx.fillRect(120, 320, 60, 60);
    ctx.font = "20px Arial";
    ctx.fillStyle = "#3d2b13";
    ctx.fillText("Игра скоро!", 75, 200);
}
