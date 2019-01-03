Page({
  data: {
    Password: '',
    submited: false
  },
  inputPassword: function (e) {
    this.setData({
      Password: e.detail.value
    })
  },
  formSubmit: function (e) {
    // console.log(e.detail.value.No)
    // let that = this;
    // if (e.detail.value.No.length == 0) {
    //   wx.showToast({
    //     title: '输入不完整!',
    //     icon: 'loading',
    //     duration: 1500
    //   })
    // }
    // else if (e.detail.value.No.length != 10) {
    //   wx.showToast({
    //     title: '请输入10位学号或工号!',
    //     icon: 'loading',
    //     duration: 1500
    //   })
    // }
    console.log(e.detail.value.No)
    wx.request({
      url: 'http://shx.nat300.top/api/user/updataPassword',
      header: {
      },
      method: "POST",
      data: {
        //method: 'user/register',
        password: e.detail.value.Password,
      },
      success: function (res) {
        console.log("success")
        if (res.data.code == "0") {
          wx.showToast({
            title: "重置密码成功",
            icon: 'success',
            duration: 1000
          })
        } else {
          wx.showToast({
            title: "重置密码失败",
            icon: 'loading',
            duration: 1500
          })
        }
      }
    })
  }
})