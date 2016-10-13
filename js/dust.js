/**
 * Created by oak-016 on 16/10/13.
 */
function Dust(){
    this.x = [];
    this.y = [];
    this.amp = [];
    this.pic = [];
    this.angle = 0;
}
Dust.prototype.num = 20;
Dust.prototype.init = function(){
    for(var i = 0; i < this.num; i++){
        this.x[i] = Math.random() * canWidth;
        this.y[i] = Math.random() * canHeight;
        this.amp[i] = Math.random() * 50 + 50;
        this.pic[i] = new Image();
        var num = Math.floor(Math.random() * 7);
        this.pic[i].src = 'src/dust' + num + '.png';
    }
}
Dust.prototype.draw = function(){
    this.angle += duringTime * 0.001;
    var l = Math.sin(this.angle);
    for(var i = 0; i < this.num; i++){
        fishesCtx.drawImage(this.pic[i], this.x[i] + l * this.amp[i], this.y[i]);
    }
}