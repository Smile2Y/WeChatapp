// pages/main/evaluate openOrclose/evaluateOoC.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sdates: '2016-11-08',
    stimes: '12:00',
    edates: '2016-11-08',
    etimes: '12:00',
    currentTab: 0,
    bUid: 0,
    opOcl:"关闭课堂评价",
    sdates2: '2016-11-08',
    stimes2: '12:00',
    edates2: '2016-11-08',
    etimes2: '12:00',
    currentTab2: 0,
    bUid2: 0,
    opOcl2: "关闭课程评价",
    color:"red",
    color2:"red",
    id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
this.data.id=options.id
console.log(this.data.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  switchTab: function(e) {
    var _this=this
    let tab = e.currentTarget.id
    if (tab === "0") {
      _this.setData({
        currentTab: 1,
        bUid: 1,
        opOcl:"开启课堂评价",
        color:"white"
      })
    }
    if (tab === "1") {
      _this.setData({
        currentTab: 0,
        bUid: 0,
        opOcl: "关闭课堂评价",
        color: "red"
      })

    }
  },
  switchTab2: function (e) {
    var _this = this
    console.log(_this.data.id)
    let tab = e.currentTarget.id
    if (tab === "0") {
      _this.setData({
        currentTab2: 1,
        bUid2: 1,
        opOcl2: "开启课程评价",
        color2: "white"
        
      })
      wx.request({
        url: 'http://shx.nat300.top/api/course/closeCourseAssess',
        method: "POST",
        data: {
          "courseType": 0,
          "courseId": _this.data.id
        },
        success: function (res) {
          console.log(res.data)
        }
      })
    }
    if (tab === "1") {
      _this.setData({
        currentTab2: 0,
        bUid2: 0,
        opOcl2: "关闭课程评价",
        color2: "red"
      })
   
    }
  }
})