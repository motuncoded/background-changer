var button= document.querySelector("button") ;
function random(number){
    return Math.floor(Math.random()*number)
}
 function backgroundChange(){
     rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
     document.body.style.backgroundColor = rndCol
 }
button.onclick= backgroundChange;