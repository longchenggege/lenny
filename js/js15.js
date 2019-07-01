// arguments数组内对象
function gogo(str1,str2){
	console.log(arguments);
}

//arguments不限参数用法
function sum(){
	var s=0;
	for(var a=0;a<arguments.length;a++){
		s=s+arguments[a];
	}
	return s;
}
//document.write(sum(89,2,3));

//函数表达式
var aa = function(){
	alert(234);
};
//aa();

//匿名函数未调用自动执行
(function(a,b){
	console.log(a+b);
})(23,34);

//函数内外全局变量使用
function xx(){
	c = 2;
	return c;
}
xx();
//alert(c);

//练习题
function summn(m,n){
	var sum = 0;
	for(var i=m;i<=n;i++){
		sum+=i;
	}
	document.write(sum);
}
summn(1,3);


function area(r){
	var s = Math.PI*Math.pow(r,2);
	return s;
}

function max(m,n){
	if(m>n){
		return m;
	}
	return n;
}

function max2(a,b,c){
	if(a>b){
		if(a>c){
			return a;
		}
		return c;
	}else{
		if(b>c){
			return b;
		}
		return c;
	}
}
//alert(max2(4,3,2));

//alert(-4%2);
//判断是否质数
function check(a){
	if(a<1){
		return false;
	}else{
		for(var i=2;i<a;i++){
			if(a%i==0){
				return false;
			}
		}
	}
	return true;
}
document.write(check(-3));






