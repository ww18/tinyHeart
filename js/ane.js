function Ane(){
	//root, control, head,
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.hasFruit = [];
	this.angle = 0;
	this.amp = [];
}
Ane.prototype.num = 50;
Ane.prototype.init = function(){
	for(var i = 0; i < this.num;i++){
		this.rootx[i] = i * 16 + Math.random() * 20;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - (200 + Math.random() * 50);
		this.hasFruit[i] = false;
		this.amp[i] = Math.random() * 50 + 50;
	}
}
Ane.prototype.draw = function(){
	this.angle += duringTime * 0.001;
	var l = Math.sin(this.angle);

	backCtx.save();
	backCtx.globalAlpha = 0.6;
	backCtx.lineWidth = 20;
	backCtx.lineCap = 'round';
	backCtx.strokeStyle = '#3b154e';
	for(var i = 0; i < this.num; i++){
		this.headx[i] = this.rootx[i] + l * this.amp[i]
		//beginPath, moveTo, lineTo, stroke, strokeStyle, lineWidth, globalAlpha
		backCtx.beginPath();
		backCtx.moveTo(this.rootx[i], canHeight);
		backCtx.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);
		
		// backCtx.closePath();
		backCtx.stroke();
	}
	backCtx.restore();
}




