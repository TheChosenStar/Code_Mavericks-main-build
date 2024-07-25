let body = document.querySelector("body");
let dark = document.getElementById("dark");
let darkText = document.getElementById("darkText");
let darkMode = false;
let header = document.getElementsByClassName("header");
let nat = document.getElementsByClassName("member")[0]; //non-bright red
let gilbert = document.getElementsByClassName("member")[1]; // orange 
let daibi = document.getElementsByClassName("member")[2];
let noah = document.getElementsByClassName("member")[3]; //blue
let pfpdivs = document.querySelectorAll("pfpDivs");
dark.style.backgroundColor = "rgba(0, 0, 0, 0.829)";
nat.onclick = function(){
    body.style.transition = "background 2s";
    body.style.backgroundColor = "maroon";
}
gilbert.onclick = function(){
    body.style.transition = "background 2s";
    body.style.backgroundColor = "DarkOrange";
}
daibi.onclick = function(){
    body.style.transition = "background 2s";
    body.style.backgroundColor = "rgb(0, 0, 150)";
}
noah.onclick = function(){
    body.style.transition = "background 2s";
    body.style.backgroundColor = "royalblue";
    dark.style.fontPallete = "white"
}
dark.onclick = function(){
    if(!darkMode){
        body.style.transition = "background 2s";
        body.style.backgroundColor = "rgb(30, 30, 30)";
        dark.style.backgroundColor = "white";
        dark.innerHTML = "Enter Light Mode";
        darkMode = true;
    }
    else{
        body.style.transition = "background 2s";
        body.style.backgroundColor = "white";
        dark.style.backgroundColor = "rgba(0, 0, 0, 0.829)";
        dark.innerHTML = "Enter Dark Mode";
        darkMode = false;
    }
}

