// pages/gank/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    androidHidden: false,
    iosHidden: false,
    frontEndHidden: false,
    recommendHidden: false,
    expandHidden: false,
    // welfareHidden: false,
    restHidden: false,
    androids: [],
    ioss: [],
    frontEnds: [],
    recommends: [],
    expands: [],
    // welfares: [],
    rests: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    wx.showLoading({
      title: '努力加载中',
    })
    console.log("gank...detail...year:" + options.year + "...month:" + options.month + "...day:" + options.day)
    wx.request({
      url: "https://gank.io/api/day/" + options.year + "/" + options.month + "/" + options.day,
      header: {
        "Content-Type": "application/text"
      },
      fail: function (res) {
        console.log("gank.io...detail...request...failed")
        wx.hideLoading()
      }, success: function (res) {
        console.log("gank.io...detail...request...success:" + JSON.stringify(res.data))
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

  handleData(data) {
    console.log("gank...detail...category:" + data.category + "..." + data.results.Android.length)

    this.setData({
      androidHidden: data.results.Android == null ? false : true,
      iosHidden: data.results.IOS == null ? false : true,
      frontEndHidden: data.results.前端 == null ? false : true,
      recommendHidden: data.results.瞎推荐 == null ? false : true,
      expandHidden: data.results.拓展资源 == null ? false : true,
      // welfareHidden: data.results.福利 == null ? false : true,
      restHidden: data.results.休息视频 == null ? false : true,
      androids: data.results.Android,
      ioss: data.results.IOS,
      frontEnds: data.results.前端,
      recommends: data.results.瞎推荐,
      expands: data.results.拓展资源,
      // welfares: data.results.福利,
      rests: data.results.休息视频,
    })
  }
})