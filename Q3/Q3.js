
// 简单的

function hoverTransform(config){
	var target = document.querySelector(config.target);
	var formerStyle = formatStyle(config.formerStyle);
    var changedStyle = formatStyle(config.changedStyle)

	target.setAttribute("style",formerStyle);
   	target.onmouseover = function(){ this.setAttribute("style",changedStyle) }

   	// 格式化style数组
   	function formatStyle(styleArr){
   		var str = '';
   		styleArr.forEach((v,i,a)=>{
   			str += v
   		})
   		return str;
   	}
}

// terget: 目标dom
// formerStyle: hover前的样式
// changedStyle: hover后的样式

hoverTransform({
	target: '.course_logo img',
	formerStyle: ['transform: rotate(90deg);'],
	changedStyle: ['transform: rotate(0deg);','transition:all 1s;']	
})


// 面向对象???

var hoverTransform = (function(){
	
	var hoverTransformFun = function(config){

	}

	hoverTransformFun.prototype.init = function(config) {

		this.target = document.querySelector(config.target);
		this.formerStyle = formatStyle(config.formerStyle);
		this.changedStyle = formatStyle(config.changedStyle)

		return this;
	};

	hoverTransformFun.prototype.render = function() {
		var that = this;
		this.target.setAttribute("style",that.formerStyle);
   		this.target.onmouseover = function(){ this.setAttribute("style",that.changedStyle) }

	};
	//返回构造函数
	return hoverTransformFun;

	// 工具函数
	var formatStyle = function(styleArr){
		var str = '';
		styleArr.forEach((v,i,a)=>{
			str += v
		})
		return str;
	}

})();

new hoverTransform().init({
	target: '.course_logo img',
	formerStyle: ['transform: rotate(90deg);'],
	changedStyle: ['transform: rotate(0deg);','transition:all 1s;']	
}).render()



