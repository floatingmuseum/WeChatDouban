//commingSoon.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '努力加载中...',
      mask:true,
    })
    var self = this
    wx.request({
      url: "https://api.douban.com/v2/movie/coming_soon",
      header: {
        "Content-Type": "application/text"
      },
      fail: function (res) {
        console.log("commingSoon...request...failed")
        wx.hideLoading()
      }, success: function (res) {
        console.log("commingSoon...request...success:" + res.data)
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
    console.log(data.count)
    this.setData({
      movies:data.subjects
    })
    var subjects = data.subjects
    for(var index in subjects){
      console.log("index:"+subjects[index].title)
    }
  },

  toMovieDetail: function(event){
    var filmIndex = Number(event.currentTarget.dataset.index)
    console.log("点击:" + filmIndex)
    console.log("长度:" + this.data.movies.length)

    var film = this.data.movies[filmIndex]
    wx.navigateTo({
      url: '../detail/detail?movie=' + JSON.stringify(film),
    })
  }
})