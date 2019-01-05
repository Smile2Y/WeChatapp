// pages/main/student management/excel input/excelin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  chooseimg: function () {
    var that = this
    wx.chooseImage({
     
      success: function (res) {
        console.log(res)
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
        //console.log(res.tempFilePaths);
        // that.setData({
        //   imag: res.tempFilePaths[0]
        // })
        //console.log(res)
        //console.log("选择图片： " + res.tempFilePaths[0])
        //console.log(res.tempFiles)
      })
      }
    })
  },
})