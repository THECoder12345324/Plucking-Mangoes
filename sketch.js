
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treeIMG;
var boyIMG;
var mangoIMG;
var connection;

var count = 0;
var score = 0;

function preload()
{
	treeIMG = loadImage("treeimg.png");
	stoneIMG = loadImage("stone2.png");
	boyIMG = loadImage("boy1.png");
	mangoIMG = loadImage("mango.png");
}

function setup() {
	createCanvas(1300, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width / 2, height - 10, width, 40);
	tree = new Tree(870, 580, 550, 550, treeIMG);
	boy = new Tree(200, 690, 110, 165, boyIMG)
	stone = new Stone(50, 200, 18, stoneIMG);

	mango1 = new Mango(random(645, 1095), random(400, 600), random(30, 50), mangoIMG);
	mango2 = new Mango(random(645, 1095), random(400, 600), random(30, 50), mangoIMG);
	mango3 = new Mango(random(645, 1095), random(400, 600), random(30, 50), mangoIMG);
	mango4 = new Mango(random(645, 1095), random(400, 600), random(30, 50), mangoIMG);
	mango5 = new Mango(random(645, 1095), random(400, 600), random(30, 50), mangoIMG);

	connection = new Sling(stone.body, {x: 150, y: 620}, 0.03, 0);

	Engine.run(engine);
  
}


function draw() {
  

  Engine.update(engine);

  rectMode(CENTER);

  background(rgb(135, 206, 235));
  ground.display();
  tree.display();
  boy.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  if (detectcollision(stone, mango1)) {
	Matter.Body.setStatic(mango1.body, false);
	if (count == 0) {
		score += 5
	}
	if (count == 1) {
		score += 4
	}
	if (count == 2) {
		score += 3
	}
	if (count == 3) {
		score += 2
	}
	if (count == 4) {
		score += 1
	}
	if (count > 5) {
		score += 0
	}
  }
  if (detectcollision(stone, mango2)) {
	Matter.Body.setStatic(mango2.body, false);
	if (count == 0) {
		score += 5
	}
	if (count == 1) {
		score += 4
	}
	if (count == 2) {
		score += 3
	}
	if (count == 3) {
		score += 2
	}
	if (count == 4) {
		score += 1
	}
	if (count > 5) {
		score += 0
	}
  }
  if (detectcollision(stone, mango3)) {
	Matter.Body.setStatic(mango3.body, false);
	if (count == 0) {
		score += 5
	}
	if (count == 1) {
		score += 4
	}
	if (count == 2) {
		score += 3
	}
	if (count == 3) {
		score += 2
	}
	if (count == 4) {
		score += 1
	}
	if (count > 5) {
		score += 0
	}
  }
  if (detectcollision(stone, mango4)) {
	Matter.Body.setStatic(mango4.body, false);
	if (count == 0) {
		score += 5
	}
	if (count == 1) {
		score += 4
	}
	if (count == 2) {
		score += 3
	}
	if (count == 3) {
		score += 2
	}
	if (count == 4) {
		score += 1
	}
	if (count > 5) {
		score += 0
	}
  }
  if (detectcollision(stone, mango5)) {
	Matter.Body.setStatic(mango5.body, false);
	if (count == 0) {
		score += 5
	}
	if (count == 1) {
		score += 4
	}
	if (count == 2) {
		score += 3
	}
	if (count == 3) {
		score += 2
	}
	if (count == 4) {
		score += 1
	}
	if (count > 5) {
		score += 0
	}
  }
  connection.display();

  textSize(35);
  fill("black");
  text("Press space to reset the rock", 10, 50);
  text("Score: " + score, 1150, 50);
  textSize(25);
  text("Drag the mouse to launch. Less tries means more points.", 320, 200);
 
}

function mouseDragged() {
	stone.body.position.x = mouseX;
	stone.body.position.y = mouseY;
}

function mouseReleased() {
	connection.fly();
}

function detectcollision(lstone, lmango) {
	mangoPos = lmango.body.position;
	stonePos = lstone.body.position;
	distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
	if (distance <= lstone.r + lmango.r) {
		return true;
	}
	return false;
}
function keyPressed() {
	if (keyCode == 32) {
		connection.attach();
	}
}