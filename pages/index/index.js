// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    leftMin: 0,
    leftMax: 6,
    rightMin: 0,
    rightMax: 6,
    leftValue: 0,
    rightValue: 6,
    priceList: ["1","2","3","4","5","6","7","8","9"],
    leftWidth: '50', 
    rightWidth: '50', 
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  leftSchange: function (e) {
    var that = this
    that.setData({
      isQuery: false
    })
    var value = e.detail.value
    if(value==that.data.rightValue){
      if(that.data.rightValue==6) value--
      else value++
    }
    that.setData({
      leftValue: value
    })
    if(value<that.data.rightValue){
      var bg_price = that.data.priceList[value].slice(1)
      var end_price = that.data.priceList[that.data.rightValue].slice(1)
    }
    else{
      var end_price = that.data.priceList[value].slice(1)
      var bg_price = that.data.priceList[that.data.rightValue].slice(1)
    }
    //list['bg_price'] = bg_price
    //list['end_price'] = end_price
    wx.setStorageSync("priceList", { bg_price: value, end_price: that.data.leftValue})
    setTimeout(function () {
      // wxb.Post('/api/minsu.index/index', list, function (data) {
      //   console.log(list,"价格slider")
      //   console.log(data)
      //   that.setData({
      //     isQuery: true
      //   })
      //   if (data.length != 0) {
      //     that.setData({
      //       result: data.num + '套',
      //     })
      //   }
      //   else {
      //     that.setData({
      //       result: '0套',
      //     })
      //   }
      // })
    }, 700)
  },
//右边
rightSchange: function (e) {
    var that = this
    that.setData({
      isQuery: false
    })
    var value = e.detail.value
    if (value == that.data.leftValue) {
      if(that.data.leftValue==6) value--
      else value++
    }
    that.setData({
      rightValue: value
    })
    if (value < that.data.leftValue) {
      var bg_price = that.data.priceList[value].slice(1)
      var end_price = that.data.priceList[that.data.leftValue].slice(1)
    }
    else {
      var end_price = that.data.priceList[value].slice(1)
      var bg_price = that.data.priceList[that.data.leftValue].slice(1)
    }
    //list['bg_price'] = bg_price
    //list['end_price'] = end_price
    wx.setStorageSync("priceList", { bg_price: value, end_price: that.data.leftValue })
    setTimeout(function () {
      // wxb.Post('/api/minsu.index/index', list, function (data) {
      //   console.log(list, "价格slider")
      //   console.log(data)
      //   that.setData({
      //     isQuery: true
      //   })
      //   if (data.length != 0) {
      //     that.setData({
      //       result: data.num + '套',
      //     })
      //   }
      //   else {
      //     that.setData({
      //       result: '0套',
      //     })
      //   }
      // })
    }, 700)
  },
})
