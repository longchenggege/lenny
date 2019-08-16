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
			//帧编号
			this.f = 0;
			//演员清单
			this.actors = [];
			//加载所有资源，该函数后会加载start函数
			this.loadResources(function(){
				this.start();
			});
		},
		
		//加载所有资源
		loadResources:function(callback){
			var self = this;
			//加载图片资源提示
			self.ctx.font = '20px 微软雅黑';
			self.ctx.textAlign = 'center';
			self.ctx.fillText('正在加载图片..',self.canvas.width/2,self.canvas.height*(1-0.618));
				
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
							//清屏
							self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
							count++;
							self.ctx.fillText('正在加载图片'+count+'/'+imagesAmount,self.canvas.width/2,self.canvas.height*(1-0.618));
							//所有资源加载完
							if(count==imagesAmount){
								//开始主循环
								callback.call(self);
							}
						}
					}
					console.log(self.RObj);
				}
			}
			xhr.open('get',this.RtextURL,true);//true异步调用
			xhr.send(null);
		},
		start:function(){
			var self = this;
			//背景
			this.bg = new Background();
			//大地 要在背景下面
			this.land = new Land();

			//游戏开始了，主循环
			this.timer = setInterval(function(){
				//清屏
				self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
				//遍历actors元素执行语句
				_.each(self.actors,function(actor){
					actor.update();
					actor.render();
				});

				//实例化管子
				if(self.f%60==0){
					new Pipe();
				}

				//打印帧编号
				self.f++;
				self.ctx.font = '14px 微软雅黑';
				self.ctx.fillText(self.f,20,20);

			},50)
		},

		//获取数组内随机数
		getrandom:function(arr){ //[1,2,3,4]
			var len = Math.random()*arr.length;
			return (arr[Math.floor(len)]);
		},
		//获取数据范围内随机数
		frandom:function(m,n){ //(1,10)
			var len = Math.random()*(n-m);
			return (m+Math.floor(len));
		},
		
	})
})();


//25