// pages/swip/swip.js
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
      msg:"123"
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
    }
  }
})
