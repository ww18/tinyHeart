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
		this.alive[i] =	false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.aneID[i] = 0;
		this.spd[i] = Math.random() * 0.017 + 0.003; //[0.003, 0.02)
		// this.born(i);
		this.fruitType[i] = '';
	}
	this.orange.src = 'src/fruit.png';
	this.blue.src = 'src/blue.png';
}
Fruit.prototype.draw = function(){
	
	//这里应该重复画了很多次，所以透明度都没有了
	var pic;
	for(var a = 0; a < this.num; a++){
		if(this.alive[a]){
			if(this.l[a] <= 14){
				this.l[a] += this.spd[a] * duringTime ;
				this.x[a] = anes.headx[this.aneID[a]];
				this.y[a] = anes.heady[this.aneID[a]];
			}else{
				this.y[a] -= this.spd[a] * 7 * duringTime;
				 anes.hasFruit[this.aneID[a]] = false;
			}

			//因为是全局变量，所以需要实时赋值
			pic = this.orange;
			if(this.fruitType[a] == 'blue'){
				pic = this.blue;
			}
			backCtx.drawImage(pic, this.x[a]-this.l[a] * 0.5, this.y[a] - this.l[a] * 0.5, this.l[a], this.l[a]);
			if(this.y[a] < 10){
				this.alive[a] = false;
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
	console.log('fruits alive num: '+ num);
}

function showFruit(){
	for(var i = 0; i < fruits.num; i++){
		if(!fruits.alive[i]){
			fruits.born(i);
			return;
		}
	}
}


