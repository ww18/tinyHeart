function Score(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}

Score.prototype.draw = function(){
	fishesCtx.save();

	fishesCtx.shadowBlur = 10;
	fishesCtx.shadowColor = 'white';
	fishesCtx.fillText("SCORE:" + this.score, canWidth * 0.5, 30);
	fishesCtx.fillText("LIFE:" + (babyFish.body.length - babyFish.bodyCount), canWidth * 0.5, canHeight-10);

	if(score.gameOver){
		this.alpha += duringTime * 0.0005;
		fishesCtx.fillStyle = 'rgba(255, 255, 255,'+ this.alpha+')';
		fishesCtx.fillText("GAMEOVER", canWidth * 0.5, canHeight * 0.5);
	}
	fishesCtx.restore();
}
Score.prototype.calculateScore = function(){
	this.score += this.fruitNum * this.double;
	this.fruitNum = 0;
	this.double = 1;
}
Score.prototype.gameOver = function(){

}