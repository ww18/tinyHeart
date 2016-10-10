/**
 * Created by oak-016 on 16/10/10.
 */
function Circle(){
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
}
Circle.prototype.num = 10;
Circle.prototype.init = function () {
    for(var i = 0; i < this.num; i++){
        this.alive[i] = false;
    }
}
Circle.prototype.draw = function(){
    fishesCtx.save();
    fishesCtx.lineWidth = 2;
    fishesCtx.shadowBlur = 10;
    fishesCtx.shadowColor = '#fff';
    for(var i = 0; i < this.num; i++){
        if(this.alive[i]){
            this.r[i] += duringTime * 0.02;
            if(this.r[i] > 40){
                this.alive[i] = false;
                break;
            }
            var alpha = 1 - this.r[i] / 40;

            fishesCtx.beginPath();
            fishesCtx.strokeStyle = 'rgba(255,255,255,'+alpha+')';
            fishesCtx.arc(this.x[i], this.y[i], this.r[i], 0, 2*Math.PI);
            fishesCtx.closePath();
            fishesCtx.stroke();

        }
        console.log(i);
    }
    fishesCtx.restore();
}

Circle.prototype.born = function(x, y){
    for(var i = 0; i < this.num; i++){
        if(!this.alive[i]){
            this.alive[i] = true;
            this.x[i] = x;
            this.y[i] = y;
            this.r[i] = 10;
            break;
        }
    }
    console.log(1);
}