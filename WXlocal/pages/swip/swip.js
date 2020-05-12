// pages/swip/swip.js

const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      msg:"",
      name:"",
      pass:"",
      userInfo :[],
      style:"",
      endTime: '2018-11-22 10:40:30',
      timer: '',//定时器名字
      countDownNum: '60'
  },

  /**
   * 组件的方法列表
   */
  methods: {
   
    onLoad:function(options){
      wx.setTopBarText({
        text: 'hello top!',
      })
      // setInterval(() => {
      //   this.getDate
      // }, 1000);
      
      this.countDown();
     
      if(app.globalData.userInfo){
        this.setData({
          userInfo: app.globalData.userInfo,
        })
     }else{
       wx.switchTab({
         url: '../index/index',
       })
      }
     if(wx.getStorageSync('gray')){
          this.setData({
            style:'filter: grayscale(100%); -webkit-filter: grayscale(100%);'+
            ' -moz-filter: grayscale(100%);-ms-filter: grayscale(100%); -o-filter: grayscale(100%);',
          })
      }
    },
    // var opan = document.getElementById("span");
      // function tow(n) {
      //   return n >= 0 && n < 10 ? '0' + n : '' + n;
      // }

    // getDate:  function() {
    //     var oDate = new Date();//获取日期对象
    //     var oldTime = oDate.getTime();//现在距离1970年的毫秒数
    //     var newDate = new Date('2020/5/12 17:00:00');
    //     var newTime = newDate.getTime();//2019年距离1970年的毫秒数
    //     var second = Math.floor((newTime - oldTime) / 1000);//未来时间距离现在的秒数
    //     var day = Math.floor(second / 86400);//整数部分代表的是天；一天有24*60*60=86400秒 ；
    //       second = second % 86400;//余数代表剩下的秒数；
    //     var hour = Math.floor(second / 3600);//整数部分代表小时；
    //       second %= 3600; //余数代表 剩下的秒数；
    //     var minute = Math.floor(second / 60);
    //     second %= 60;
    //     var str =
    //      //day + '<span class="time">天</span>'+ 
    //         hour + '<span class="time">小时</span>'
    //         + minute + '<span class="time">分钟</span>'
    //         + second + '<span class="time">秒</span>';
    //     document.getElementById("span").innerHTML = str;
    //   },

// 倒计时 抄写开始
    countDown:function(){
        var that=this;
        var nowTime = new Date().getTime();//现在时间（时间戳）
        var endTime = new Date(that.data.endTime).getTime();//结束时间（时间戳）
        var time = (endTime-nowTime)/1000;//距离结束的毫秒数
        // 获取天、时、分、秒
        let day = parseInt(time / (60 * 60 * 24));
        let hou = parseInt(time % (60 * 60 * 24) / 3600);
        let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
        let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
        // console.log(day + "," + hou + "," + min + "," + sec)
        day = that.timeFormin(day),
        hou = that.timeFormin(hou),
        min = that.timeFormin(min),
        sec = that.timeFormin(sec),

        that.setData({
          day: that.timeFormat(day),
          hou: that.timeFormat(hou),
          min: that.timeFormat(min),
          sec: that.timeFormat(sec)
        })
        // 每1000ms刷新一次
        setTimeout(this.countDown, 1000);
    },
    //小于10的格式化函数（2变成02）
    timeFormat(param) {
      return param < 10 ? '0' + param : param;
    },
    //小于0的格式化函数（不会出现负数）
    timeFormin(param) {
      return param < 0 ? 0: param;
    },
    //抄写结束
    backTap:function(){
       wx.redirectTo({
         url: '../login/login',
       })
    },
    actionBtn:function(e){
       wx.showActionSheet({
         itemList: ["鸣凰","流翠"],
         success (res) {
          console.log(res.tapIndex)
         },
       })
    },
    scanBtn:function(e){
        wx.scanCode({
           success: (res) => {
               wx.showToast({
                  title: res.result,
                  icon:"success",
                  duration:3000
               })
           },
        })
    },
    vibrate:function(){
      wx.vibrateLong({
        complete: (res) => {},
      })
    },
    FZview:function(e){
      console.log(e);
      wx.setClipboardData({
        data: 'data',
        success:()=>{
          wx.hideToast()
        }
      })
      
        
    },
    testTar:function(e){
       console.log(e.target.id)
       console.log(e.currentTarget.id)
    }
  },

  
})
