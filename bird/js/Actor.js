(function(){
	var Actor = window.Actor = Class.extend({
		init:function(){
			game.actors.push(this);
		},
		update:function(){

		},
		render:function(){
			throw new Error('所有继承类必须重写render方法');
		}
	})
})();