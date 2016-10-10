function Fruit(){
	this.alive = [];
	this.orange = new Image();
	this.blue = new Image();
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = [];
	this.aneID = [];
	this.fruitType = [];
}
Fruit.prototype.num = 30;
Fruit.prototype.init = function(){
	for(var i = 0; i < this.num; i++){
		this.alive[i] = false;
		this.born(i);
	}
	this.orange.src = 'src/fruit.png';
	this.blue.src = 'src/blue.png';
}
Fruit.prototype.draw = function(){
	
	//这里应该重复画了很多次，所以透明度都没有了
	var pic;
	for(var i = 0; i < this.num; i++){
		if(this.alive[i]){
			if(this.l[i] <= 12){
				this.l[i] += this.spd[i] * duringTime ;
				this.x[i] = anes.headx[this.aneID[i] ];
				this.y[i] = anes.heady[this.aneID[i] ];
			}else{
				this.y[i] -= this.spd[i] * 7 * duringTime;
				anes.hasFruit[this.aneID[i]] = false;
			}

			//因为是全局变量，所以需要实时赋值
			pic = this.orange;
			if(this.fruitType[i] == 'blue'){
				pic = this.blue;
			}
			backCtx.drawImage(pic, this.x[i]-this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
			if(this.y[i] < 10){
				this.alive[i] = false;
			}
		}
		
	}
}
Fruit.prototype.born = function(i){
	
	var aneID = Math.floor(Math.random() * anes.num);
	//if(!anes.hasFruit[aneID]){
	while(anes.hasFruit[aneID]){
		aneID = Math.floor(Math.random() * anes.num);
	}
	anes.hasFruit[aneID] = true;
	this.l[i] = 0;
	this.spd[i] = Math.random() * 0.01 + 0.005;
	this.alive[i] = true;
	this.aneID[i] = aneID;
	var ram = Math.random();
	if(ram < 0.2){
		this.fruitType[i] = 'blue';
	}else{
		this.fruitType[i] = 'orange';
	}
	//}else{
	//	this.born(i);
	//}
}
Fruit.prototype.dead = function(i){
	this.alive[i] = false;
}
function monitorFruit(){
	var num = 0;
	for(var i = 0; i < fruits.num; i++){
		if(fruits.alive[i]) num++;
	}
	if(num < 15){
		//show fruit
		showFruit();
		return;
	}
}

function showFruit(){
	for(var i = 0; i < fruits.num; i++){
		if(!fruits.alive[i]){
			fruits.born(i);
			return;
		}
	}
}


