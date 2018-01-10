//commingSoon.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    posters:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    wx.request({
      url: "https://api.douban.com/v2/movie/coming_soon",
      header: {
        "Content-Type": "application/text"
      },
      fail: function (res) {
        console.log("commingSoon...request...failed")
      }, success: function (res) {
        console.log("commingSoon...request...success:" + res.data)
        self.handleData(res.data)
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
    console.log(data.count)
    var subjects = data.subjects
    for(var index in subjects){
      console.log("index:"+subjects[index].title)
    }
  }
})