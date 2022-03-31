var aarav, shaurya

function setup() {
  createCanvas(600,600);

  aarav=createSprite(300, 300, 80, 40);
  shaurya=createSprite(50, 50, 100, 100);
  a=createSprite(525,75,50,50);
  b=createSprite(75,75,50,50);
  c=createSprite(75,525,50,50);
  d=createSprite(475,475,50,50);


  shaurya.debug=true;
  aarav.debug=true;
  a.debug=true;
  b.debug=true;
  c.debug=true;
  d.debug=true;

  aarav.shapeColor="yellow";
  shaurya.shapeColor="yellow";
  a.shapeColor="yellow";
  b.shapeColor="yellow";
  c.shapeColor="yellow";
  d.shapeColor="yellow";
}

function draw() {
  background("red"); 

  shaurya.x=mouseX;
  shaurya.y=mouseY;

  if(touching(a,shaurya)){
    a.shapeColor="blue"
    shaurya.shapeColor="blue"
  }
  else{
    a.shapeColor="yellow";
    shaurya.shapeColor="yellow";
  }
  
  textSize(20)
  fill("black")
  //text("Shaurya's X position = " + shaurya.x,350,25)
  //text("Aarav's X position = " + aarav.x,350,60)
  console.log(shaurya.x-aarav.x)
  text("Shaurya's width = " + shaurya.width/2,350,100)
  text("Aarav's width = " + aarav.width/2,350,140)

  drawSprites();
}

