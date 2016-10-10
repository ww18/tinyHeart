function Ane(){
	this.x = [];
	this.len = [];
	this.hasFruit = [];
}
Ane.prototype.num = 50;
Ane.prototype.init = function(){
	for(var i = 0; i < this.num;i++){
		this.x[i] = Math.ceil(i * 16 + Math.random() * 20);
		this.len[i] = Math.ceil(200 + Math.random() * 50);
		this.hasFruit[i] = false;
	}
}
Ane.prototype.draw = function(){
	backCtx.save();
	backCtx.globalAlpha = 0.6;
	backCtx.lineWidth = 20;
	backCtx.lineCap = 'round';
	backCtx.strokeStyle = '#3b154e';
	for(var i = 0; i < this.num; i++){
		//beginPath, moveTo, lineTo, stroke, strokeStyle, lineWidth, globalAlpha
		backCtx.beginPath();
		backCtx.moveTo(this.x[i], canHeight);
		backCtx.lineTo(this.x[i], canHeight - this.len[i]);
		
		// backCtx.closePath();
		backCtx.stroke();
	}
	backCtx.restore();
}




