// creating the variables
var car , wall, height;
var speed , weight;

// creating the setup function
function setup() {
  createCanvas(1400,400);
  height = canvas.height/2;

  // creating the car sprite
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = color(50,100,200);

  // creating the wall sprite
  wall = createSprite(1300 ,200, 60 , height);
  wall.shapeColor = color(80,80,80);

  // setting random speed and weight
  speed = random(55 ,90);
  weight = random(400, 1500);
}

function draw() {
  // creating the background
  background(100,50,60);  
  car.velocityX = speed/8;

  fill("white");
  textSize(30);

  // the deformation above 180 
  if(wall.x - car .x < (car . width + wall. width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor = color(250 ,0,0);
      text("grade : D-" ,950,35 );
      text("deformation value :" + round(deformation), 950 ,65);
    }

    // the deformation below 180 and above 100
    if(deformation<180 && deformation >100){
      car.shapeColor = color(230 , 230 ,0);
      text("grade : B-" ,950,35 );
      text("deformation value :" + round(deformation), 950 ,65);
    }

    // the deformation below 100 
    if(deformation < 100){
      car.shapeColor = color(0 , 255 ,0);
      text("grade : A+" ,950,35 );
      text("deformation value :" + round(deformation), 950 ,65);
    }

  }
  drawSprites();
}