(function(){
	var Pipe = window.Pipe = Actor.extend({
		init:function(){
			//图片资源
			this.image1 = game.R['pipe_down'];
			this.image2 = game.R['pipe_up'];
			
			//管子移动速度
			this.speed = 3;
			//上下管子开口距离
			this.distance = 100;

			//x1 刚开始200位置，之后没隔间隙实例化一个， y1 选址范围(50,250)
			this.x1 = 360;
			this.y1 = game.frandom(100,250);
			//console.log(this.y1);
			//调用超类构造函数
			this._super();
		},
		//主循环每帧调用该函数
		update:function(){
			this.x1 = this.x1-this.speed;
			if(this.x1<-52){
				this.die();
			}
			/*if(this.x1<-288){
				this.x1 = 0;
			}*/
			//game.ctx.drawImage(this.image1,0,this.y1,52,320-this.y1,this.x1,0,52,320-this.y1); 
			//game.ctx.drawImage(this.image2,0,0,52,90+this.y1-this.distance,this.x1,210-this.y1+this.distance,52,90+this.y1-this.distance); 
		},
		//主循环每帧调用该函数
		render:function(){
			/*game.ctx.fillRect(this.x,100,100,100);*/
			game.ctx.drawImage(this.image1,0,this.y1,52,320-this.y1,this.x1,0,52,320-this.y1); //左上角0,y,52,320-y,x,0,52,320-y
			game.ctx.drawImage(this.image2,0,0,52,90+this.y1-this.distance,this.x1,320-this.y1+this.distance,52,90+this.y1-this.distance); //左下角0,0,52,520-320+y-dis,x,320-y+dis,52,520-320+y-dis
		},
		die:function(){
			game.actors = _.without(game.actors,this);
		}
	})
})();