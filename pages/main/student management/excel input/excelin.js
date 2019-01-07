// pages/main/student management/excel input/excelin.js
import cookie from '../../../../vendor/weapp-cookie/index'

Page({

  /**
     * 页面的初始数据
     */
  data: {
    user_token: '',
    courseId: '',
    userType: '',
    courseName: '',
    param: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.courseId = options.courseId
    this.data.userType = options.userType
    this.data.courseName = options.courseName
    // this.data.
    console.log(this.data)
  },
  onShow: function (options) {
    console.log(cookie.get("user_token"))
    this.user_token = cookie.get("user_token")
    this.courseId = this.data.courseId;
    this.userType = this.data.userType;
    this.courseName = this.data.courseName;
    this.setData({
      param: "http://shx.nat300.top/html/addExecl?user_token=" + this.user_token + '&' + "courseId=" + this.courseId+"&userType="+this.userType+"&courseName="+this.courseName
    })
    console.log(this.data.param)
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