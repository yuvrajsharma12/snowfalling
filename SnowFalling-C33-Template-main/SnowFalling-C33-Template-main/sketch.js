var snowImage,bgImage

function preload (){
 snowImage=loadImage("snow4.webp")
 bgImage= loadImage("snow2.jpg") 
}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(bgImage);
   snowflak()
  drawSprites();
}
function snowflak() {
  if(frameCount%60==0){

  
  snow = createSprite(random(0,800), 0, 50, 50);
  snow.addImage(snowImage)
  snow.scale = 0.3
  snow.velocityY = 3
  snow.lifetime = 150
  }
}