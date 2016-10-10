function Score(){
	this.fruitNum = 0;
	this.double = 1;
}
Score.prototype.reset = function(){
	this.fruitNum = 0;
	this.double = 1;
}
Score.prototype.draw = function(){
	fishesCtx.save();
	fishesCtx.fillStyle = '#fff';
	fishesCtx.fillText("fruitNum:" + this.fruitNum, canWidth * 0.5, canHeight-30);
	fishesCtx.fillText("double:" + this.double, canWidth * 0.5, canHeight);
	fishesCtx.restore();
}