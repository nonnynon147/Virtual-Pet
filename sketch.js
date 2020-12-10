//Create variables here
var dog,happyDog,database
var foodS,foodStock,dogImage
function preload()
{
  loadImage('/images/dogImg.png');
  loadImage('/images/dogImg1.png');
  dogImage = image('dogImg.png');
  happyDog = image('dogImg1.png');
  dog.addImage(dogImage);
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,50,50);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}

readStock();
writeStock();

function readStock(data){
foodS = data.val();
}

function writeStock(x){
database.ref('/').update({
  food:x
})
}

function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  textSize(30);
  fill("white");
  stroke();
  text(foodStock,400,30);
  //add styles here

}



