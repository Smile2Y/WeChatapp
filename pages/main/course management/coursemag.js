// pages/main/course management/coursemag.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    id:"",
    course:[],
    courses:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id=options.id;
    // console.log(this.data.id)
// var that=this
// wx.request({
//   url: 'http://shx.nat300.top/api/course/courseCalendar',
//   method:"POST",
//   data:{
//     "id": this.data.id,
//   },
//   success: function(e){
//     if(e.data.data[0]!=null){
//       that.setData({
//         course: e.data.data[0]
//       })
//     }
//   }
// })

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


  // 提交表单
  formSubmit: function (res) {
    var that = this;
    var detail = res.detail.value;
    // console.log(this.data.id)
    // console.log(detail)
    wx.showToast({
      title: '',
      icon: 'loading',
      duration: 1500
    }),
    wx.request({
      url: 'http://shx.nat300.top/api/course/addCourseCalendar',
      method:"POST",
      data:{
        // "id": this.data.id,
        "courseId": that.data.id,
        "courseTime": detail.courseTime,
        "courseTopic": detail.courseTopic,
        "courseContent": detail.courseContent,
        "courseKnowledge": detail.courseKnowledge,
        "courseAbility": detail.courseAbility
      },
      success: function (e) {
        // console.log(e)
        wx.showToast({
          title: '上传成功',
          icon: 'success',
          duration: 1500
        })
        setTimeout(function () {
          wx.redirectTo({
            url: '/pages/main/course management/coursemag/courseCalendar?id=' + that.data.id,
          })
        }, 1500)


      }
      
    })

  },
  // 课程归档
  applySubmit:function(){
    wx.request({
      url: 'http://shx.nat300.top/api/course/unactiveCourse',
      method:"POST",
      data:{
        "id":this.data.id
      },
      success:function(e){
        wx.showToast({
          title: '归档成功',
          icon: 'success',
          duration: 1500
        })
        setTimeout(function () {
          wx.redirectTo({
            url: '../../main/teaching calendar/teachingcald',
          })
        }, 1500)
      },
      fail:function(){
        console.log("失败")
      }
    })
  }

})