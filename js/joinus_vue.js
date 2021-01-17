var app = new Vue({
    el:"#app",
    data() {
        return {
          form:{
            name:'',
            collage:'',
            subject:'',
            tel:'',
            grate:'',
            interest:'',
            introduce:'',
            sex:''
          },
          showSuccess:false,
          isMObile:false,
          position:'left'
        }
      },
      methods: {
        onSubmit() {
          console.log(this.form);
          test(this.form).then((res) =>{
            this.showSuccess = true
          }).catch((err)=>{
            this.$message.error('网络错误，请检查网络或联系管理员QQ：730330701。');
          })
        },
        onClear(){
            var that = this
            Object.keys(this.form).forEach(function(key){
                that.form[key] = ''
            });
        },
        isMobile() {
          var userAgentInfo = navigator.userAgent;
          var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];
          var mobile_flag = false;
          //根据userAgent判断是否是手机
          for (var v = 0; v < mobileAgents.length; v++) {
              if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
                  mobile_flag = true;
                  break;
              }
          }
           var screen_width = window.screen.width;
           var screen_height = window.screen.height;    
           //根据屏幕分辨率判断是否是手机
           if(screen_width < 500 && screen_height < 800){
               mobile_flag = true;
           }
           return mobile_flag;
        }
      },
      mounted(){
        if(this.isMobile()){
          console.log("是手机")
          this.isMObile = true
          this.position = 'left'
        }
      }
})