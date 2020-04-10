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
    grayTap:function(){
        if(this.data.isGrayBtn){
            this.setData({
               formType:'',
               isGrayBtn:false,
               grayMsg:'一键变灰',
            })
        }else{
           this.setData({
            formType:'filter: grayscale(100%); -webkit-filter: grayscale(100%); -moz-filter: grayscale(100%);-ms-filter: grayscale(100%); -o-filter: grayscale(100%);',
            isGrayBtn:true,
            grayMsg:'一键还原',
           })
        }
    },
    passwordInput:function(e){
        this.setData({
            password: e.detail.value
        })
    },
    login:function(){
        if(this.data.phone.length == 0 && this.data.password.length == 0){
          wx.setStorageSync('name', this.data.phone)
          wx.setStorageSync('pass', this.data.password)
          
          if(app.globalData.userInfo){
            wx.switchTab({
              url: '../swip/swip'
            })
          }else{
            wx.switchTab({
              url: '../index/index'
            })
          }  
        }else{
           wx.showToast({
             title: '信息不全',
             duration:1000,
             icon:"none"  //loading,success
           })
        }
    },
    onLoad:function(){
      this.setData({
          formType:'',
          isGrayBtn:false,
          grayMsg:'一键变灰',
          WJMMStyle:'color: gray; font-size: 12px',
      })
    }
  }
})
