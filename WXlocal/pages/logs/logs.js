//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      // || [] 这种写法, 简单拉说就是三元  : ?,眼熟吗
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    }),
    wx.navigateTo({
      url: '../swip/swip',
    })
  }
})
