// 采集表单信息
var btn = document.querySelector(".btn");
var row_input = document.querySelector(".row");
var col_input = document.querySelector(".col");
var w_input = document.querySelector(".w");
var h_input = document.querySelector(".h");

// 事件绑定
btn.addEventListener('click',function(){
    // 获取输入的信息
    var row = row_input.value;// 多少行
    var col = col_input.value;// 多少列
    var width = w_input.value;// 每个方块的宽度
    var height = h_input.value;// 每个方块的高度

    // 判断输入框是否为空
    if(row == "" || col == "" || width == "" || height == "") {
        alert("输入框不能为空!");
        return false;
    }

    // 设置参数
    var str = `?row=${row}&col=${col}&width=${width}&height=${height}`;

    // 跳转页面
    location.href = './index.html'+str;
})