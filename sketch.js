var dog, dogImg, dogImg1;
var database;
var foodS, foodStock;

function preload() {
  dogImg = loadImage("Images/dogImg.png");
  dogImg1 = loadImage("Images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale=0.20;
}



  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();

  textSize(15);
  fill(255,255,0);
  stroke("black");
  text("Food remaining : "+foodS,170,150);

  text("Note: Press the Up Arro Key to Feed Drago Milk!",130,10,300,20)
  }


  function readStock(data){
    foodS=data.val();
  }
  
  function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    } 
    database.ref('/').update({
      Food:x


  })
}



