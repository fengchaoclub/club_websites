// var BaseUrl = 'http://localhost:5203/api/Club/';
var BaseUrl = 'http://pa.web.temp.sufeng.online:5203/api/Club/';
function test(data){
    return new Promise(function(reslove,reject){
        $.ajax({
            url: BaseUrl + 'test',
            data:data,
            type:"POST",
            dataType:"jsonp", //指定服务器返回的数据类型
            jsonp: "callback",
            success: function (res) {
                reslove()
            },
            error:function(){
                reject()
            }
        });
    })
}