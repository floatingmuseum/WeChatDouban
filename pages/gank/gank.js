//commingSoon.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    girls: [],
    titles: []
  },

  onPullDownRefresh: function () {
    console.log("gank...下拉刷新")
    wx.showToast({
      title: '执行下拉刷新',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '努力加载中...',
      mask: true,
    })
    var self = this
    wx.request({
      url: "https://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1",
      header: {
        "Content-Type": "application/text"
      },
      fail: function (res) {
        console.log("gank.io...request...failed")
        wx.hideLoading()
      }, success: function (res) {
        console.log("gank.io...request...success:" + res.data)
        self.handleData(res.data)
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleData: function (data) {
    console.log(JSON.stringify(data))//将对象转化为json字符串
    console.log(data.results.length)
    var results = data.results
    //修改时间显示格式
    for (var index in results) {
      this.data.titles[index] = results[index].publishedAt
      var time = util.formatTime(new Date(results[index].publishedAt))
      results[index].publishedAt = time
      console.log("index:" + results[index].publishedAt + "...time:" + time + "..." + this.data.titles.length)
    }
    this.setData({
      girls: data.results
    })
  },

  toGankDetail: function (event) {
    var girlIndex = Number(event.currentTarget.dataset.index)
    console.log("点击:" + girlIndex)
    console.log("长度:" + this.data.girls.length)
    var girl = this.data.girls[girlIndex]
    var title = this.data.titles[girlIndex]
    var time = new Date(title)
    wx.navigateTo({
      url: 'detail/detail?year=' + time.getFullYear() + "&month=" + (time.getMonth() + 1) + "&day=" + time.getDate()
    })
  }
})