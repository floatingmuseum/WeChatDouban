//top250.js
//获取应用实例
const app = getApp()
var common = require('../../common.js')
Page({

  /**
   * 页面的初始数据
   * wxml页面中预制的一些值，在data中添加值
   */
  data: {
    name:"Curry",
    array:["Curry","Rose","Dirk","Webber","Duncan"],

    flag:true,
    imageUrl : "",
    a:1,
    b:2,

    tempalteData:{
      name:"Danny",
      age:"27",
      job:"coder"
    },

    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4],

    condition:false
  },

  changeName:function(e){
    console.log(e)
    common.sayHello("top250")
    console.log("GlobalInfo:"+app.globalData.testInfo)
    this.setData({
      name : "Webber",
      imageUrl:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508258043.webp"
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
      url: "https://api.douban.com/v2/movie/top250",
      header: {
        "Content-Type": "application/text"
      },
      fail: function (res) {
        console.log("top250...request...failed")
        wx.hideLoading()
      }, success: function (res) {
        console.log("top250...request...success:" + res.data)
        // self.handleData(res.data)
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
  
    switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  clickInner:function(){
console.log("触摸Inner")
  },
  clickOuter:function(){
    console.log("触摸Outer")
  }
})