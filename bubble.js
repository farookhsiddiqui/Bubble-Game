var timer = 60;
var score = 0;
var hitrn = 0;



function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}



function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}



function bubble(){
var clutter = "";
for(let i = 1; i<=168; i++){
    hitrn = Math.floor(Math.random() * 10);
    clutter += `<div class ="bubble">${hitrn}</div>`;
}

document.querySelector('#pbtm').innerHTML = clutter;

}



function runtimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over !</h1>`;
        }
    },1000)
}




document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        bubble();
        getNewHit();
    }

});

var reload = document.querySelector(".reload");
reload.addEventListener("click",function(){
    window.location.reload()
})


runtimer();
bubble();
getNewHit();
increaseScore()


