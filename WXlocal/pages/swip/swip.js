// pages/swip/swip.js

const app = getApp()
Component({
  /** 组件的属性列表*/
  properties: { },
  /**组件的初始数据*/
  data: {
      msg:"",
      name:"",
      pass:"",
      userInfo :[],
      style:"",
      endTime: "2020-11-22 10:40:30",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad:function(options){
      var that = this;
        wx.setTopBarText({
          text: 'hello top!',
        })
        // setInterval(() => {
        //   this.getDate
        // }, 1000);

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
        // 定时的要加bind来固定this, 方法不加()
        setInterval(that.countDown.bind(this),1000);
    },

    countDown:function(){
      let  that = this;
        var nowTime = new Date().getTime();//现在时间（时间戳）
        var endTime1 = new Date("2020-5-13 17:00:00").getTime();//结束时间（时间戳）
        var time = (endTime1-nowTime)/1000;//距离结束的毫秒数
        // 获取天、时、分、秒
        //let day = parseInt(time / (60 * 60 * 24));
        let hou = parseInt(time % (60 * 60 * 24) / 3600);
        let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
        let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
        that.setData({
         //   day: day,
            hou: hou,
            min: min,
            sec: sec
        })
    },
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
