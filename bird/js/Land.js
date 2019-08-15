(function(){
	var Land = window.Land = Actor.extend({
		init:function(){
			this.image = game.R['land'];
			this.x = 0;
			this.speed = 2;
			//调用超类构造函数
			this._super();
		},
		//主循环每帧调用该函数
		update:function(){
			this.x = this.x-this.speed;
			if(this.x<-336){
				this.x = 0;
			}
		},
		//主循环每帧调用该函数
		render:function(){
			/*game.ctx.fillRect(this.x,100,100,100);*/
			game.ctx.drawImage(this.image,this.x,game.canvas.height-110,336,110);
			game.ctx.drawImage(this.image,this.x+336,game.canvas.height-110,336,110);
			game.ctx.drawImage(this.image,this.x+336*2,game.canvas.height-110,336,110);
		}
	})
})();