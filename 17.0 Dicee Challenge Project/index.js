var random_number1=(Math.random()*6)+1;
random_number1=Math.floor(random_number1);

var random_number2=(Math.random()*6)+1;
random_number2=Math.floor(random_number2);

document.querySelector(".img1").setAttribute("src", "./images/dice"+random_number1+".png");
document.querySelector(".img2").setAttribute("src", "./images/dice"+random_number2+".png");

if(random_number1>random_number2){
    document.querySelector("h1").textContent="🚩 Player1 Wins!";
}
else if (random_number2>random_number1){
    document.querySelector("h1").textContent="Player2 Wins! 🚩";
}
else{
    document.querySelector("h1").textContent="It's a Draw!";
 
}
