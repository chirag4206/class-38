var  database;

var car1,car2,car3,car4,cars;
var gameState = 0
var playerCount
var game,player,form
var allPlayers
var distance = 0

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
  game  = new Game()
  game.getState()
  game.start()

  
}

function draw(){
  background("white");

  if(playerCount===4){
    game.updateState(1)
  }
  
  if(gameState===1){
    game.play()
  }
}


