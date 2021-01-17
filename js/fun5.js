const { domain } = require("process");

/* -------------------------插入内容------------------------ */
$(document).ready(function ($) {
  function member(name, job, image){//成员对象
    this.name = name;
    this.job = job;
    this.image = image;
  }
var team = [//成员数组
new member("陈家鹏", "社长", "images/cjp.jpg"),
new member("大哥", "技术", "images/jjy.jpg"),
new member("徐荣荣", "产品", "images/xrr.jpg"),
new member("张晓铭", "运营", "images/zxm.jpg")
];
for(var i = 0;i < team.length;i++){
  //append添加子节``
    $(".doctors-nav").append(`
        <li class="slick-slide slick-active" index="3" style="width: 259px;">
        <div class="single-doctor">
        <div class="single-doctor">
            <a class="tdoctor" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
            <figure>
                <img src="./images/cjp.jpg">
                <svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M180,160C180,160,0,218,0,218C0,218,0,0,0,0C0,0,180,0,180,0C180,0,180,160,180,160"></path><desc>Created with Snap</desc><defs></defs></svg>
                <figcaption>
                <h2></h2>
                <p></p>
                </figcaption>
            </figure>
            </a>
        </div>
        </div>
    </li>
    `);
    $(".doctors-nav img")[i].src = team[i].image;
    $(".doctors-nav h2")[i].append(team[i].name);
    $(".doctors-nav p")[i].append(team[i].job)
}

  // 这里插入文字  
  //$("#topintroduce").html("蜂巢工作室是一个以技术为中心的社团。由一群热爱互联网技术的人创建，希望能够邀请更多对互联网感兴趣的同学一起学习最新的编程知识、分享自己的经验。");  
  //插入关于我们
  // $("#about_us_club").html(`
  // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大学相对宽松的课程安排，让我们有更多的时间和精力去做我们想做的事情，但很多时候，想要
  // 为目标付诸行动时却发现我们根本就不知道从哪里下手。甚至身边没有人懂我们想要做什么，更不要说去寻求帮助。百度搜到的是大部分都是培训班的
  // 广告；即便搜到了各种技术文档，初入大学的我们针织不知道如何学习这些文档；学习这些课外知识遇到困难想找人交流时，却发现自己是孤身一人。
  // 于是，我们创建了蜂巢工作室，让想学习又没有方向的同学找到方向，让对互联网技术感兴趣的同学有一个学习交流的环境。<br><br>
  // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;蜂巢工作室成立的初衷就是提供一个平台，帮助那些对互联网技术感兴趣，并且愿意
  // 持续投入时间和精力学习的同学。让你能够找到归属感、不断提高自身能力。大学四年时间转瞬即逝，很多同学浑浑噩噩过了四年，毕业
  // 时才追悔莫及。如果你想在毕业时得到比别人更好的结果，就要在这四年付出比别人更多的努力：有一个明确的职业规划，并为了实现职
  // 业目标不断的学习。<br><br>
  // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在蜂巢工作室，不会像学校或者培训机构那样手把手教你用工具或者套模版，但会带你找到学习方向、让你掌握解决问题的方法、使你具备独立学习的
  // 能力。让你知道自己目前需要做什么，以及未来可以做什么。蜂巢工作室的前辈们会给你分享学习的经验和教训，避免你走太多的弯路。我们的最终目标就
  // 是，让每一个能坚持下来的成员，在离开大学的时候都具备独当一面的能力。`)

  //插入项目介绍
  function project(url,name){
    this.url = url
    this.name = name
  }
  var projectList = [
    new project('images/usageScenarios1.jpg','网页'),
    new project('images/usageScenarios2.jpg','小程序'),
    new project('images/usageScenarios3.jpg','后端'),
    new project('images/usageScenarios4.jpg','小游戏')
  ]
  // for(var i =0;i<projectList.length;i++){
  //   $("#our_projects_club").append(`
  //   <div class="col-md-4 col-sm-4 col-lg-3">
  //   <div class="single-Blog">
  //     <div class="single-blog-left"> </div>
  //     <div class="single-blog-right">
  //       <div class="blog-img">
  //         <figure class="blog-figure col-lg-12">
  //          <a><img src="images/usageScenarios1.jpg" alt="img"></a>
  //           <span class="image-effect"></span>
  //         </figure>
  //       </div>
  //       <div class="blog-author"> </div>
  //       <div class="blog-content">
  //         <h2 class="col-lg-11" style="text-align: center" ></h2>
  //         <div class="readmore_area"> </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //   `)
  //   $("#our_projects_club img")[i].src = projectList[i].url
  //   $("#our_projects_club h2")[i].append(projectList[i].name)
  // }
  //插入加入我们你可以获得
  function youCanGet(introduce){
    this.introduce = introduce
  }
  var youCanGetArr = [
    new youCanGet('和已经工作的学长交流，做好职业规划，甚至未来的面试准备。'),
    new youCanGet('掌握几门编程语言，完成一个小应用程序，而不是仅仅学会理论知识。'),
    new youCanGet('接触到真正的程序开发，而不是仅仅局限在写一个实验报告与课程设计。'),
    new youCanGet('加入蜂巢工作室现有的项目，锻炼团队协作能力。'),
    new youCanGet(''),
    new youCanGet('交到很多志同道合的朋友，找到集体归属感。'),
  ]
  for(var i = 0;i<youCanGetArr.length;i++){
    $('#youCanGet').append(`
      <div class="col-lg-4 col-md-4">
        <div class="single-service">
          <div class="service-icon"> </div>
            <img src="images/arrow.png" style="width: 50px;">
            <div style="height: 10px;"></div>
          <p></p>
        </div>
      </div>
    `);
    if(youCanGetArr[i].introduce == ''){
      $('#youCanGet img')[i].src = ''
    }
    $('#youCanGet p')[i].append(youCanGetArr[i].introduce)
  }
  //插入我们的要求
  // $(".contain_yaoqiu").append(`
  //   <p class="yaoqiu">你可以不懂太多专业知识，但你要清楚自己到底想要什么；</p>
  //   <p class="yaoqiu">你可以不十分聪明（也别太笨），但你要能为了目标持之以恒；</p>
  //   <p class="yaoqiu">你可以不善言谈，但要乐于分享和交流；</p>
  //   <p class="yaoqiu">学习编程的收获是巨大的，过程也是很枯燥的，如果不能坚持就请不要开始。</p>
  //   <div class="baoming">立即报名</div>
  // `)
  //报名链接的跳转函数
  $(".baoming").click(function(){
      window.location.href = 'pages/joinus_element.html'
  })
})