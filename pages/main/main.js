// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    courseName:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.id=options.id,
    this.courseName=options.courseName
    this.setData({
      id:options.id,
      courseName:options.courseName
    })
    console.log(this.id)
    console.log(this.courseName)
    // this.setData({
    //   id:id
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
  switchiTo :function(e){
    let id = e.currentTarget.id
    if (id ==='coursemag'){
      wx.navigateTo({
        url: '/pages/main/course management/coursemag/courseCalendar?id='+this.data.id,
      })
    }
    if (id === 'evaluatemag'){
      wx.navigateTo({
        url: '/pages/main/evaluate management/evaluatemag?id=' + this.data.id,
      })
    }
    if (id === 'teachingcal') {
      wx.navigateTo({
        url: '/pages/main/teaching calendar/teachingcald?id=' + this.data.id,
      })
    }
},
  applySubmit: function () {
    var _this=this
    wx.showModal({
      title: '提示',
      content: '是否要将该课程归档？',
      success:function(res){

        if(res.confirm){
          wx.request({
            url: 'http://shx.nat300.top/api/course/unactiveCourse',
            method: "POST",
            data: {
              "id": _this.data.id
            },
            success: function (e) {
              wx.showToast({
                title: '归档成功',
                icon: 'success',
                duration: 1500
              })
              // setTimeout(function () {
              //   wx.redirectTo({
              //     url: '../../main/teaching calendar/teachingcald',
              //   })
              // }, 1500)
            },
            fail: function () {
              console.log("失败")
            }
          })
        }
        
      }
    })

   
  }

})