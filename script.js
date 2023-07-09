const button = document.getElementById("start")
button.addEventListener("click", function() {makeSound()});
document.getElementById("start").addEventListener("click",function(){

});

function makeSound()
{

    let audio = new Audio('bsong.mp3');
    audio.play();
}