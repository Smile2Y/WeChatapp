// pages/main/course management/coursemag/courseCalendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    courseList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id;
    var that = this

    wx.request({
      url: 'http://shx.nat300.top/api/course/courseCalendar',
      method: "POST",
      data: {
        "id": this.data.id,
      },
      success: function (e) {
        console.log(e)
        if (e.data.data[0] != null) {
          that.setData({
            courseList: e.data.data
          })
        }
        // console.log(that.data.course)
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





  enterTo: function () {
    wx.navigateTo({
      url: '/pages/main/course management/coursemag',
    })
  }
})