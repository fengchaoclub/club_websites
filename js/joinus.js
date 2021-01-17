var data = {
    name:String,
    collage:String,
    subject:String,
    tel:String,
    grate:String,
    interest:String,
    introduce:String,
    sex:String
}
// 调用方法
$("#submit").click(function(){
    var form = $("input")
    for(var i = 0;i < form.length;i++){
        console.log(form[i].name)
        if(form[i].name === 'sex'){
            if(form[i].checked){
                data[form[i].name] = form[i].value
            }
        }else{
            data[form[i].name] = form[i].value
        }
    }
    data.grate = $('select')[0].value
    test(data)
    //弹出成功页面
    $(".from-border").hide()
    $("body").append(
        `<div id="success" class="child-center">
            <div class="success-img"></div>
            <p>感谢支持！我们稍后将会联系您。</p>
         </div>`
    )
　});
//清空表格
function formReset(){
    document.getElementById("form").reset()
}