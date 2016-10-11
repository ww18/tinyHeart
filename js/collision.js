function bigFishFruitCollision(){
	if(!score.gameOver){
		for(var i = 0; i < fruits.num; i++){
			if(fruits.alive[i]){
				var l = calLength2(fruits.x[i], fruits.y[i], bigFish.x, bigFish.y);
				if(l < 900){
					fruits.alive[i] = false;
					score.fruitNum++;
					if(fruits.fruitType[i] == 'blue'){
						score.double = 2;
					}
					bigFish.bodyCount++;
					if(bigFish.bodyCount > 7){
						bigFish.bodyCount = 7;
					}
					console.log('调用born方法之前i的值: ' + i);
					console.log('fruit的所有坐标值, x:' + fruits.x[i] + ' y:'+ fruits.y[i] );
					circle.born(fruits.x[i], fruits.y[i], i);
					break;
				}
			}
		}
	}

}

function bigFishBabyCollision() {
	if (score.fruitNum > 0 && !score.gameOver) {
		var l = calLength2(bigFish.x, bigFish.y, babyFish.x, babyFish.y);
		if (l < 900) {
			babyFish.bodyCount = 0;
			score.calculateScore();
			bigFish.reset();

			halo.born(babyFish.x, babyFish.y);
		}
	}
}