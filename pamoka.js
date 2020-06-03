var colors=[];

var squares = document.querySelectorAll(".square");
var colorRGB = document.querySelector(".colorDisplay");
var pickedColor=colors[0];
var selectedColor="";
var again=document.querySelector(".again");
var congrats=document.querySelector(".congrats");
var h1=document.querySelector("h1");


//i array spalvas randomColor
start();
//play AGAIn
again.addEventListener("click",reset);

// spalvos kvadratu
for(var i=0;i<colors.length;i++){
  //uzdejau spalvas
  squares[i].style.backgroundColor=colors[i];
  //grab colorRGB
  squares[i].addEventListener("click", function(){
    var selectedColor = this.style.backgroundColor;
    if(selectedColor === pickedColor){
      correct();
    }else{
      this.style.backgroundColor="#333333";
      congrats.style.visibility="visible";
      congrats.textContent="Try again!";
  }}
)}


//RGB kodas


function reset(){
colors=[];
start();
spalvos();
  }

function spalvos(){
  for(var i=0;i<colors.length;i++){
    squares[i].style.backgroundColor=colors[i];
};}

function start(){

  h1.style.backgroundColor="#13b4e8";
  for(var i = 0;i<6;i++){
    colors.push(randomColor());
    //isgauti random is array
    var num = Math.floor(Math.random()*6);
    pickedColor=colors[num];
  };
  colorRGB.textContent=pickedColor;
  again.style.color="black";
  congrats.style.visibility="hidden";
  again.textContent="NEW COLORS";
}

function correct(){
  for(var i=0;i<squares.length;i++){
  squares[i].style.backgroundColor=pickedColor;
}
h1.style.backgroundColor=pickedColor;
colors=[];
again.style.color="red";
congrats.style.visibility="visible";
congrats.textContent="Correct!";
again.textContent="PLAY AGAIN?";
;}


//randomColor
function randomColor(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb("+r+", "+g+", "+b+")";
}
