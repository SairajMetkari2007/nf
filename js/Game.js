class Game{
  constructor(){

  }
getState(){
    var gameStateRef=database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState=data.val();

    })    
}

update(state){
    database.ref('/').update({
        gameState:state
    });
    
}
async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
}
play(){
    form.hide();
    Player.getPlayerInfo();
       
    background(backgroundImg);
    
    if (keyWentDown('P')){
      fighter1.addAnimation('fighter1',fighter1PunchImg);
    }
    if(keyWentUp('p')){
      fighter1.addAnimation('fighter1',fighter1Img);
    }
    if (keyDown('k')){
      fighter1.addAnimation('fighter1',fighter1KickImg);
    }

    if (keyDown('d')){
      fighter1.x=fighter1.x+10;
    }
    if (keyDown('a')){
      fighter1.x=fighter1.x-10;
    }

    fighter1.bounceOff(w2);
    fighter1.bounceOff(w1);
    fighter1.bounceOff(fighter2);

    drawSprites();
  }

}