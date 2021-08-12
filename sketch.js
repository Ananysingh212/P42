var issImg,spaceCraftImg,spaceCraftBoth,spaceCraftLeft,spaceCraftRight, spaceCraft, hasDocked = false;
var Bg;
var iss;


function preload(){
   issImg = loadImage("iss.png");
   Bg = loadImage("spacebg.jpg");
   spaceCraftImg = loadImage("spacecraft1.png")
   spaceCraftBoth = loadImage("spacecraft2.png")
   spaceCraftLeft = loadImage("spacecraft3.png")
   spaceCraftRight = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(1000,600);

  spaceCraft = createSprite(600, 400, 50, 50);
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.scale = 0.2;

  iss = createSprite(200, 200, 50, 50);
  iss.addImage("iss", issImg);
  iss.scale = 0.5;
}

function draw() {
  background(Bg);
  
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1);
    
  }

  if(keyWentDown(LEFT_ARROW)){
     spaceCraft.addImage(spaceCraftLeft);
     spaceCraft.velocityX = -5;
  }

  if(keyWentUp(LEFT_ARROW)){
    spaceCraft.addImage(spaceCraftImg);
    spaceCraft.velocityX = 0;
 }

 if(keyWentDown(RIGHT_ARROW)){
  spaceCraft.addImage(spaceCraftRight);
  spaceCraft.velocityX = 5;
}

if(keyWentUp(RIGHT_ARROW)){
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.velocityX = 0;

}

if(keyWentDown(UP_ARROW)){
  spaceCraft.addImage(spaceCraftBoth);
  spaceCraft.velocityY = -5;
}

if(keyWentUp(UP_ARROW)){
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.velocityY = 0;
}
   
    if(spaceCraft.y <=(iss.y+70) && spaceCraft.x<=(iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white");
     text("Docking Sucessful", 200, 300);
    }
    


  drawSprites();
}