const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;

var particle;
var count=0;

var gameState="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50){
     plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();

   }

  /* for (var j = 0; j < particles.length; j++) {
    if(particles[j]!=null){
      particles[j].display();
      console.log(particles)
      }
   } */
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(mouseIsPressed){
    if(gameState==="play"){
      count=count+1
      particle=new Particle(mouseX,20,5);
      }
   }
   if(particle!=null){
     particle.display()
    if( particle.body.position.y>480){

     if(particle.body.position.x>170){
        score=score+100
        particle=null
        if(count>=5){
          gameState="end"
        }
     }
     else if(particle.body.position.x>171 && particle.body.position.x<490){
      score=score+200
      particle=null
      if(count>=5){
        gameState="end"
      }
   }
   else if(particle.body.position.x>491 && particle.body.position.x<740){
     score=score+100
     particle=null
     if(count>=5){
       gameState="end"
     }
   }
  }
   }

   if(gameState==="end"){
    textSize(32);
    text("Game Over",400,400)
   }

   textSize(32);
   fill("white");
   text("SCORE : "+score,30,30);
   text("LIVES : "+count,630,30);
   text("100",10,650);
   text("100",90,650);
   text("100",170,650);
   text("200",250,650);
   text("200",330,650);
   text("200",410,650);
   text("200",490,650);
   text("100",570,650);
   text("100",650,650);
   text("100",740,650);

   stroke("yellow");
  line(0,480,800,480);
}

function mousePressed() {
  console.log("tina")
 // console.log("tina");
 if(gameState==="play"){
  count=count+1
  particle=new Particle(mouseX,20,5);
  }
}