var p1 = prompt("enter the name of player 1");
var p2 = prompt("enter the name of player 2");
var num1 = Math.floor(6*Math.random()+1);
var num2 = Math.floor(6*Math.random()+1);
var randomImage1 = "images/dice" + num1 +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);
var randomImage2 = "images/dice" + num2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);
if(num1>num2){
    document.querySelector("h1").innerHTML = p1 + " WINS 🎲"
}
else if(num2>num1){
    document.querySelector("h1").innerHTML = p2 + " WINS🎲"
}
else{
    document.querySelector("h1").innerHTML = " 🎲 DRAW 🎲"
}