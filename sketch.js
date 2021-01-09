//Create variables here
var dog , happyDog , database , foodS , foodStock ; 
var dogObj ; 
function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500 , 500);
  dogObj = createSprite(250 , 300 , 150 , 150)
  dogObj.addImage(dog)
  dogObj.scale = 0.15 ;
  foodStock = database.ref('Food')
  foodStock.on("value" , readStock)
  textSize(20)
}


function draw() {  
background(46 , 139 , 87)
if(keyWentDown(UP_ARROW )){
  writeStock(foodS)
  dogObj.addImage(happyDog)
}



  drawSprites();
  //add styles here

text("foodStock:"+foodS , 170 , 20)
fill('green')
stroke('red')
textSize(13)
text("Note:Press UP ARROW to feed Drago milk " , 150 , 450)

}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
if(x<=0){
x=0;

}
else{
  x=x-1
}
database.ref('/').update({
Food:x


})



}


