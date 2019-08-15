(function(){
	var Background = window.Background = Actor.extend({
		init:function(){
			//随机选择白天黑夜
			this.dayOrNight = game.getrandom([0,1]);

			//自己的图片名字
			this.imageName = (["bg_day","bg_night"])[this.dayOrNight];
			//自己的图片，已经被game R加载完
			this.image = game.R[this.imageName];
			//x的位置
			this.x = 0;
			//背景移动速度
			this.speed = 2;
			//调用超类构造函数
			this._super();
		},
		//主循环每帧调用该函数
		update:function(){
			this.x = this.x-this.speed;
			if(this.x<-288){
				this.x = 0;
			}
		},
		//主循环每帧调用该函数
		render:function(){
			/*game.ctx.fillRect(this.x,100,100,100);*/
			game.ctx.drawImage(this.image,this.x,0,288,520);
			game.ctx.drawImage(this.image,this.x+288,0,288,520);
			game.ctx.drawImage(this.image,this.x+288*2,0,288,520);
		}
	})
})();