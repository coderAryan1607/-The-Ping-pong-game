var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0fa19ae0-ee63-4f91-9985-bf4885c6a94d","94aa22c0-4089-4290-9034-0a38bfe1d8e5","e9cdf65b-4c6a-44aa-8db9-72dee333bd1e"],"propsByKey":{"0fa19ae0-ee63-4f91-9985-bf4885c6a94d":{"name":"tt_ball","sourceUrl":null,"frameSize":{"x":392,"y":392},"frameCount":1,"looping":true,"frameDelay":10,"version":"aqfxKDd4W4nCUUxcvtc27s8LLS6pGbe7","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":392},"rootRelativePath":"assets/0fa19ae0-ee63-4f91-9985-bf4885c6a94d.png"},"94aa22c0-4089-4290-9034-0a38bfe1d8e5":{"name":"shovel_silver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/39UvnUnzwI_oiPVC6KDB7gOPgOKnzTUG/category_tools/shovel_silver.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"39UvnUnzwI_oiPVC6KDB7gOPgOKnzTUG","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/39UvnUnzwI_oiPVC6KDB7gOPgOKnzTUG/category_tools/shovel_silver.png"},"e9cdf65b-4c6a-44aa-8db9-72dee333bd1e":{"name":"hammer_1","sourceUrl":null,"frameSize":{"x":340,"y":390},"frameCount":1,"looping":true,"frameDelay":12,"version":"SL8nMGtCvY.Q0lANGgAg8uGttIFv6Gze","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":390},"rootRelativePath":"assets/e9cdf65b-4c6a-44aa-8db9-72dee333bd1e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

playSound("assets/welcome.mp3", false);
 

var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="black";
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="red";
    var ball= createSprite(200,200,10,10);
   ball.shapeColor="orange";
   createEdgeSprites();
   function drawNet(){
      for(var num = 0; num < 400; num = num + 20){
     stroke("white");
     strokeWeight(5);
      line(200,num,200,num+10);
    }
   }

ball.setAnimation("tt_ball");

ball.scale = 0.13;    
computerPaddle.setAnimation("shovel_silver_1") ;  
playerPaddle.setAnimation("hammer_1");
playerPaddle.scale = 0.205;



function draw() {
 background("blue");
 if(keyDown("up")){
   playerPaddle.y = playerPaddle.y -30 ;
}
  if (keyDown("down")){
    playerPaddle.y = playerPaddle.y +30;
    
  }
  computerPaddle.y = ball.y ;
  if(keyDown("space")){
   ball.velocityX="7";
   ball. velocityY ="10";
  }
  if(ball.isTouching(playerPaddle)){
    playSound("assets/category_hits/retro_game_weapon_-_gauntlet_punch_1.mp3", false);
    
  }
  if(ball.isTouching(computerPaddle)){
 playSound("assets/category_hits/retro_game_hit_block_3.mp3", false);
  
    
  }
  if(ball.x < -5||ball.x > 405){
    resetBall();
  }
   
    ball.bounceOff(topEdge);
    ball.bounceOff(bottomEdge);
    ball.bounceOff(playerPaddle);
    ball.bounceOff(computerPaddle);
    
  
    drawSprites();
   
    drawNet();
}
function resetBall() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
  playSound("assets/loze.mp3", false);
  
  
    
  
  
}
//playSound(, false);
//sprite.setAnimation();
                

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
