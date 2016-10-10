function bigFishFruitCollision(){
	if(!score.gameOver){
		for(var i = 0; i < fruits.num; i++){
			if(fruits.alive[i]){
				var l = calLength2(fruits.x[i], fruits.y[i], bigFish.x, bigFish.y);
				if(l < 900){
					fruits.dead(i);
					score.fruitNum++;
					if(fruits.fruitType[i] == 'blue'){
						score.double = 2;
					}
					bigFish.bodyCount++;
					if(bigFish.bodyCount > 7){
						bigFish.bodyCount = 7;
					}
					circle.born(fruits.x[i], fruits.y[i]);

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