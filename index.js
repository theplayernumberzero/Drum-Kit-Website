
//detecting button press
var number = document.querySelectorAll(".drum").length;

for(var i = 0 ; i < number ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
    
}

//detecting keyboard press
document.addEventListener("keydown",function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "A":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "S":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "D":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "F":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "J":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "K":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "L":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
    }
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}