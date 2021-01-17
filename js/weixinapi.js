
$.ajax({
  url: "http://pa.api.sufeng.online/WechatOa/JsSdkConfig?url=" + window.location.href.split("#")[0],
  type: "GET",
  dataType: "jsonp", //指定服务器返回的数据类型
  jsonp: "callback",
  success: function (res) {
      console.info("Get Into success");
      inintWXApi(res)
      console.log(res)
      // $("#text").val(result);
}
});
var attachData = {
  title:'蜂巢工作室',
  desc:'2020招新报名表',
  imgUrl:"http://code.sufeng.online/images/logo-small.png"
}
function inintWXApi(data){
  wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: data.AppId, // 必填，公众号的唯一标识
    timestamp:data.TimeStamp , // 必填，生成签名的时间戳
    nonceStr: data.NonceStr, // 必填，生成签名的随机串
    signature: data.Signature,// 必填，签名，见附录1
    jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ'                        
    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  })
  wx.ready(function(){
    //分享朋友圈
    wx.onMenuShareTimeline({
        title: attachData.title, // 分享标题
        link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: attachData.imgUrl, // 分享图标
        success: function () {
            // alert("成功")
           
        }
    });
  //分享好友
    wx.onMenuShareAppMessage({
        title: attachData.title, // 分享标题
        desc: attachData.desc, // 分享描述
        link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: attachData.imgUrl, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            // alert("成功")
          
        }
    }); 
  //QQ
    wx.onMenuShareQQ({
      title: attachData.title, // 分享标题
      desc: attachData.desc, // 分享描述
      link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: attachData.imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
  });
}