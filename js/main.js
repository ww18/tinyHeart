var backCan, 
	fishesCan,
	backCtx,
	fishesCtx,
	canWidth,
	canHeight,
	bgPic = new Image(),
	duringTime,
	lastTime,
	anes,
	fruits,
	bigFish,
	babyFish,
	mx,
	my,
	score;

document.body.onload = startGame;

function startGame(){

	initGame();

	lastTime = new Date();
	loopGame();
	
}

function initGame(){
	backCan = document.getElementById('background');
	fishesCan = document.getElementById('fishes');


	fishesCan.addEventListener('mousemove', onmousemove, false);

	backCtx = backCan.getContext('2d');
	fishesCtx = fishesCan.getContext('2d');

	fishesCtx.fillStyle = '#fff';
	fishesCtx.font="30px Arial";
	fishesCtx.textAlign = 'center';

	canWidth = backCan.width;
	canHeight = backCan.height;

	bgPic.src = './src/background.jpg';

	anes = new Ane();
	anes.init();

	fruits = new Fruit();
	fruits.init();

	bigFish = new BigFish();
	bigFish.init();

	babyFish = new BabyFish();
	babyFish.init();

	score = new Score();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;
	
}

function loopGame(){
	window.requestAnimFrame(loopGame);
	backCtx.clearRect(0,0,canWidth,canHeight);
	fishesCtx.clearRect(0,0,canWidth,canHeight);

	var now = new Date();
	duringTime = now - lastTime;
	lastTime = now;
	if(duringTime > 40) duringTime = 40;

	drawBackground();

	anes.draw();
	fruits.draw();
	monitorFruit();

	bigFish.draw();
	bigFishFruitCollision();
	bigFishBabyCollision();

	babyFish.draw();
	score.draw();
}

function drawBackground(){
	backCtx.drawImage(bgPic, 0, 0, canWidth, canHeight);
}

function onmousemove(e){
	if(!score.gameOver){
		if(e.offSetX || e.layerX){
			mx = e.offSetX == undefined ? e.layerX : e.offSetX;
			my = e.offSetY == undefined ? e.layerY : e.offSetY;
		}
	}

}

