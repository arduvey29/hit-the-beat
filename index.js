function handleClick() {
    animation(this.innerHTML);
    switch (this.innerHTML) {
        case "l":
            var audio1 = new Audio("./sounds/kick-bass.mp3")
            audio1.play();
            break;

        case "w":
            var audio2 = new Audio("./sounds/tom-1.mp3")
            audio2.play();
            break;

        case "s":
            var audio3 = new Audio("./sounds/tom-2.mp3")
            audio3.play();
            break;

        case "a":
            var audio4 = new Audio("./sounds/tom-3.mp3")
            audio4.play();
            break;

        case "d":
            var audio5 = new Audio("./sounds/tom-4.mp3")
            audio5.play();
            break;

        case "j":
            var audio6 = new Audio("./sounds/snare.mp3")
            audio6.play();
            break;

        case "k":
            var audio7 = new Audio("./sounds/crash.mp3")
            audio7.play();
            break;

        default:
            break;


    }
    
}

function keyBoard(event) {
    if (event.code == 'KeyL') {
        var sound = new Audio("./sounds/kick-bass.mp3")
        sound.play();
        animation(event.key);
    }
    else if (event.code == 'KeyW') {
        var sound = new Audio("./sounds/tom-1.mp3")
        sound.play();
        animation(event.key);
    }
    else if (event.code == 'KeyS') {
        var sound = new Audio("./sounds/tom-2.mp3")
        sound.play();
        animation(event.key);
    }
    else if (event.code == 'KeyA') {
        var sound = new Audio("./sounds/tom-3.mp3")
        sound.play();
        animation(event.key);
    }
    else if (event.code == 'KeyD') {
        var sound = new Audio("./sounds/tom-4.mp3")
        sound.play();
        animation(event.key);
    }
    else if (event.code == 'KeyJ') {
        var sound = new Audio("./sounds/snare.mp3")
        sound.play();
        animation(event.key);
    }
    else if (event.code == 'KeyK') {
        var sound = new Audio("./sounds/crash.mp3")
        sound.play();
        animation(event.key);
    }
}

function animation(key) {
    var currentKey = document.querySelector("."+key);
    currentKey.classList.add("pressed");
    setTimeout(function () {
        currentKey.classList.remove("pressed");
    }, 100);
}

for (var i = 0; i <= document.querySelectorAll("button.drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
    document.addEventListener("keydown", keyBoard);
}






