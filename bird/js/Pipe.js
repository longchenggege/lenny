(function(){
	var Pipe = window.Pipe = Actor.extend({
		init:function(){
			//图片资源
			this.image1 = game.R['pipe_down'];
			this.image2 = game.R['pipe_up'];
			this.x = 0;
			//管子移动速度
			this.speed = 2;
			//上下管子开口距离
			this.distance = 50;
			//调用超类构造函数
			this._super();
		},
		//主循环每帧调用该函数
		update:function(){
			/*this.x = this.x-this.speed;
			if(this.x<-336){
				this.x = 0;
			}*/
		},
		//主循环每帧调用该函数
		render:function(){
			/*game.ctx.fillRect(this.x,100,100,100);*/
			game.ctx.drawImage(this.image1,0,50,52,320-50,100,0,52,320-50);
			game.ctx.drawImage(this.image2,0,0,52,150,100,520-150,52,150);
		}
	})
})();