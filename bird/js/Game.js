(function(){
	var Game = window.Game = Class.extend({
		//构造函数
		init:function(id){
			//得到画布
			this.canvas = document.getElementById(id);
			//画布上下文
			this.ctx = this.canvas.getContext("2d");
			//R文件路径
			this.RtextURL = 'R.txt';
			//图片资源对象 v是图片路径
			this.RObj = null;
			this.R = {};
			//加载所有资源
			this.loadResources();
		},
		//加载所有资源
		loadResources:function(){
			var self = this;

			self.ctx.font = '30px 微软雅黑';
			self.ctx.textAlign = 'center';
			self.ctx.fillText('正在加载图片..',self.canvas.width/2,self.canvas.height/2);
						
			var count = 0;
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && (xhr.status==304||xhr.status==200)){
					//将字符串转为对象
					self.RObj = JSON.parse(xhr.responseText);
					//图片总数
					var imagesAmount = _.size(self.RObj);
					//遍历对象，设置一个相似的图片Image的对象的json
					for(var k in self.RObj){
						//创建Image对象
						self.R[k] = new Image();
						//发出src请求
						self.R[k].src = self.RObj[k];
						self.R[k].onload = function(){
							self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
							count++;
							//self.ctx.fillText('正在加载图片'+count+'/'+imagesAmount,100,100);
						}
					}
					console.log(self.RObj);
				}
			}
			xhr.open('get',this.RtextURL,true);
			xhr.send(null);
		}
	})
})();


//25