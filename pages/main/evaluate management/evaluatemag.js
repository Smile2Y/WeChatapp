// pages/main/evaluate management/evaluatemag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
currentTab:0,
    id:"",
    userShow:"name",
    index:0,
    array: ['学生', '教师'], 
    objectArray:
     [
       { id: 0, name: '学生' }, 
     { id: 1, name: '教师' }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.data.id=options.id
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
  switchTab: function (e) {
    let tab = e.currentTarget.id
    if (tab === 'tableft') {
      this.setData({ currentTab: 0 })
    } else if (tab === 'tabright') {
      this.setData({ currentTab: 1 })
    }
  },

  bindPickerChange: function (e) {
    var index = this.data.index 
    this.setData({      
      index: e.detail.value    
      })  },
  formSubmit:function(e){
    var data=e.detail.value
    wx.request({
      url: 'http://shx.nat300.top/api/assess/addNorm',
      method:"POST",
      data  :{
        "normName":e.detail.value.normName,
        "normType":this.data.index,
        "courseId":this.data.id
      },
      success: function (res) { 
        wx.showToast({
          title: '上传成功',
          icon: 'success',
          duration: 1500}),
          setTimeout(function () {
            wx.redirectTo({
              url: '../../teaching calendar/teachingcald',
            })
          }, 1500)
      },
      fail: function (res) { 

      },
      complete: function (res) { 

      },
    })
     
  
  }
  
})