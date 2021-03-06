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
	score,
	circle,
	halo,
	dust;

document.body.onload = startGame;

function startGame(){

	initGame();

	lastTime = new Date();
	duringTime = 0;
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

	circle = new Circle();
	circle.init();

	halo = new Halo();
	halo.init();

	dust = new Dust();
	dust.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;
	
}

function loopGame(){
	requestAnimationFrame(loopGame);
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

	babyFish.draw();

	bigFishFruitCollision();
	bigFishBabyCollision();

	score.draw();

	circle.draw();
	halo.draw();
	dust.draw();

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

