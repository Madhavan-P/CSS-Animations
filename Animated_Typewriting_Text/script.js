const text = ["DEVELOPER"," DESIGNER", "ENTREPRENEUR"];
let speed = 100;
let textIndex = 0;
let characterIndex = 0;
let textElement = document.getElementById("textData");
console.log(textElement.innerHTML);

function typeText(){
    if(characterIndex < text[textIndex].length){
        textElement.innerHTML += text[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeText, speed);
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText(){
    if(textElement.innerHTML.length > 0){
        textElement.innerHTML = textElement.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50);
    }
    else{
        characterIndex = 0;
        textIndex = (textIndex + 1) % text.length;
        setTimeout(typeText,500);
    }
}

window.onload = typeText;