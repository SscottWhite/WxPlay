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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    fb:function(){
         this.setData({
            msg:"hello"
         })
    },
    fb2:function(){
      console.log(this);//可以直接改
      setTimeout(function(){
          console.log(this);
      })
    },
    fb3:()=>{
      console.log(this);
    },
    onLoad:function(options){
      var x = 11;
      var that = this;
      var obj = {
        x: 22,
        methods: {
          x: 33,
          say: function () { console.log("这里"+this.x) },
          say2: () => { console.log("那里"+that) }
        }
      }
   
      obj.methods.say();
      obj.methods.say2();

     if(app.globalData.userInfo){
        this.setData({
          userInfo: app.globalData.userInfo,
        })
     }else{
       /*this.setData({
          name: wx.getStorageSync('name')
       })*/
       wx.switchTab({
         url: '../index/index',
       })
     }

    },
    backTap:function(){
       wx.redirectTo({
         url: '../login/login',
       })
    }
  },

  
})
