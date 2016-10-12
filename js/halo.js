/**
 * Created by oak-016 on 16/10/10.
 */
function  Halo(){
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
}
Halo.prototype.num = 10;
Halo.prototype.init = function () {
    for(var i = 0; i < this.num; i++){
        this.alive[i] = false;
    }
}
Halo.prototype.draw = function(){
    fishesCtx.save();
    fishesCtx.lineWidth = 3;
    fishesCtx.shadowBlur = 10;
    fishesCtx.shadowColor = '#ff6400';
    for(var i = 0; i < this.num; i++){
        if(this.alive[i]){
            this.r[i] += duringTime * 0.06;
            if(this.r[i] > 100){
                this.alive[i] = false;
                continue;
            }
            var alpha = 1 - this.r[i] / 100;

            fishesCtx.beginPath();
            fishesCtx.strokeStyle = 'rgba(255,100,0,'+alpha+')';
            fishesCtx.arc(this.x[i], this.y[i], this.r[i], 0, 2*Math.PI);
            fishesCtx.closePath();
            fishesCtx.stroke();

        }
    }
    fishesCtx.restore();
}

Halo.prototype.born = function(x, y){
    for(var i = 0; i < this.num; i++){
        if(!this.alive[i]){
            this.alive[i] = true;
            this.x[i] = x;
            this.y[i] = y;
            this.r[i] = 20;
            return;
        }
    }
    console.log(1);
}