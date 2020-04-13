// pages/login/login.js
var app = getApp();
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
    phone : '',
    password:'',
    grayMsg:'',
    isGrayBtn:false,
    formType:'',
    WJMMStyle:'',
    nameOld:'',
    passOld:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    WJMM:function(){
        this.setData({
          WJMMStyle:"color: green ; font-size: 12px ;"
        })
    },
    phoneInput:function(e){
        this.setData({
           phone: e.detail.value
        })
    },
    passwordInput:function(e){
        this.setData({
            password: e.detail.value
        })
    },
    grayTap:function(){
      if(this.data.isGrayBtn){
          this.setData({
             formType:'',
             isGrayBtn:false,            
             grayMsg:'一键变灰',
          })
      }else{
         this.setData({
          formType:'filter: grayscale(100%); -webkit-filter: grayscale(100%); '+
          '-moz-filter: grayscale(100%);-ms-filter: grayscale(100%); -o-filter: grayscale(100%);',
          isGrayBtn:true,
          grayMsg:'一键还原',
         })
      }
    },
    loginFomr:function(data){
      console.log(data.detail.value)
      const that = this;
        if(data.detail.value.name.length > 0 && data.detail.value.password.length > 0){
          //登陆给缓存
          wx.setStorageSync('name', data.detail.value.name)
          wx.setStorageSync('pass', data.detail.value.password)
          wx.setStorageSync('gray', this.data.isGrayBtn)
          //判断给个微信信息
          if(app.globalData.userInfo){
              wx.switchTab({
                url: '../swip/swip'
              })
          }else{
              wx.switchTab({
                url: '../index/index'
              })
          }  
        }else{  //给提示
         // console.log(that.data.phone,that.data.password)
           wx.showToast({
             title: "随便输吧",
             duration:2000,
             icon:"none"  //loading,success
           })
        }
    },
    onLoad:function(){
      const that = this; 
        if(wx.getStorageSync('name') || wx.getStorageSync('pass')){
            that.setData({
               nameOld: wx.getStorageSync('name'),
               passOld: wx.getStorageSync('pass'),
            })
        }
      that.setData({
          formType:'',
          isGrayBtn:false,
          grayMsg:'一键变灰',
          WJMMStyle:'color: gray; font-size: 12px',
      })
      //使用缓存记录
      /*
      wx.getStorageInfo({
        success (res) {
          console.log(res.keys)         //用的记录
          console.log(res.currentSize)  //当前大小
          console.log(res.limitSize)    //总大小
        }
      })
      */
    },
    backTap:function(){
      wx.navigateTo({
        url: '../login/login',
      })
    }
  }
})
