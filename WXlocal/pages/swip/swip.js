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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad:function(options){
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
    }
  },

  
})
