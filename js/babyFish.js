function BabyFish(){
	this.x = 0;
	this.y = 0;
	this.angle = 0;

	this.eye = [];
	this.eyeTimer = 0;
	this.eyeCount = 0;
	this.eyeInterval = 1000;

	this.body = [];
	this.bodyTimer = 0;
	this.bodyCount = 0;

	this.tail = [];
	this.tailTimer = 0;
	this.tailCount = 0;

}
BabyFish.prototype.init = function(){
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	var i = 0;
	for(i = 0; i < 2; i++){
		this.eye[i] = new Image();
		this.eye[i].src = 'src/babyEye' + i + '.png';
	}

	for(i = 0; i < 20; i++){
		this.body[i] = new Image();
		this.body[i].src = 'src/babyFade' + i + '.png';
	}

	for(i = 0; i < 8; i++){
		this.tail[i] = new Image();
		this.tail[i].src = 'src/babyTail' + i + '.png';
	}
}
BabyFish.prototype.draw = function(){
	//lerp x, y
	this.x = lerpDistance(bigFish.x, this.x, 0.98);
	this.y = lerpDistance(bigFish.y, this.y, 0.9);

	var deltaX = bigFish.x - this.x;
	var deltaY = bigFish.y - this.y;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;

	this.angle = lerpAngle(beta, this.angle, 0.7);

	//tail animation
	this.tailTimer += duringTime;
	
	if(this.tailTimer > 50){
		this.tailCount = (this.tailCount + 1) % this.tail.length;
		this.tailTimer %= 50;
	}
	var tailPic = this.tail[this.tailCount];

	//eye animation
	this.eyeTimer += duringTime;
	if(this.eyeTimer > this.eyeInterval){
		this.eyeCount = (this.eyeCount + 1) % this.eye.length;
		this.eyeTimer %= this.eyeInterval;
		if(this.eyeCount == 0){
			this.eyeInterval = Math.random() * 1500 + 2000;
		}else{
			this.eyeInterval = 200;
		}
	}
	var eyePic = this.eye[this.eyeCount];

	//body animation
	this.bodyTimer += duringTime;
	
	if(this.bodyTimer > 300){
		this.bodyCount = this.bodyCount + 1;
		if(this.bodyCount > 19){
			this.bodyCount = 19;
			//game over
		}
		this.bodyTimer %= 300;
	}
	var bodyPic = this.body[this.bodyCount];


	fishesCtx.save();
	fishesCtx.translate(this.x, this.y);
	fishesCtx.rotate(this.angle);
	fishesCtx.drawImage(tailPic, -tailPic.width * 0.5 + bodyPic.width * 0.6, -tailPic.height * 0.5);
	fishesCtx.drawImage(bodyPic, -bodyPic.width * 0.5, -bodyPic.height * 0.5);
	fishesCtx.drawImage(eyePic, -eyePic.width * 0.5, -eyePic.height * 0.5);
	
	fishesCtx.restore();
}