function BigFish(){
	this.x = 0;
	this.y = 0;
	this.angle = 0;

	this.eye = [];
	this.eyeTimer = 0;
	this.eyeCount = 0;
	this.eyeInterval = 1000;

	this.bodyOrange = [];
	this.bodyBlue = [];
	this.bodyTimer = 0;
	this.bodyCount = 0;

	this.tail = [];
	this.tailTimer = 0;
	this.tailCount = 0;
}
BigFish.prototype.init = function(){
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	var i = 0;
	for(i = 0; i < 2; i++){
		this.eye[i] = new Image();
		this.eye[i].src = 'src/bigEye' + i + '.png';
	}

	for(i = 0; i < 8; i++){
		this.bodyOrange[i] = new Image();
		this.bodyOrange[i].src = 'src/bigSwim' + i + '.png';
		this.bodyBlue[i] = new Image();
		this.bodyBlue[i].src = 'src/bigSwimBlue' + i + '.png';
	}

	for(i = 0; i < 8; i++){
		this.tail[i] = new Image();
		this.tail[i].src = 'src/bigTail' + i + '.png';
	}
}
BigFish.prototype.draw = function(){
	//lerp x, y
	this.x = lerpDistance(mx, this.x, 0.98);
	this.y = lerpDistance(my, this.y, 0.9);

	var deltaX = mx - this.x;
	var deltaY = my - this.y;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;

	this.angle = lerpAngle(beta, this.angle, 0.8);

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
	if(score.double == 1){
		var bodyPic = this.bodyOrange[this.bodyCount];
	}else{
		var bodyPic = this.bodyBlue[this.bodyCount];
	}

	fishesCtx.save();

	fishesCtx.translate(this.x, this.y);
	fishesCtx.rotate(this.angle);
	fishesCtx.drawImage(tailPic, -tailPic.width * 0.5 + bodyPic.width * 0.6, -tailPic.height * 0.5);
	fishesCtx.drawImage(bodyPic, -bodyPic.width * 0.5, -bodyPic.height * 0.5);
	fishesCtx.drawImage(eyePic, -eyePic.width * 0.5, -eyePic.height * 0.5);

	fishesCtx.restore();
}
BigFish.prototype.reset = function(){
	this.bodyCount = 0;
}
