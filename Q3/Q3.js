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