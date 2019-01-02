Page({
  data: {
    Name: '',
    No:'',
    Password:'',
    Type:'',
    Tel:'',
    submited: false
  },
  inputNo: function (e) {
    this.setData({
      No: e.detail.value
    })
  },
  inputName: function (e) {
    this.setData({
      Name: e.detail.value
    })
  },
  inputPassword: function (e) {
    this.setData({
      Password: e.detail.value
    })
  }, inputTel: function (e) {
    this.setData({
      Tel: e.detail.value
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
      url: 'http://shx.nat300.top/api/user/register',
      header: {
      },
      method: "POST",
      data: {
        //method: 'user/register',
        userNo: e.detail.value.No,
        userName: e.detail.value.Name,
        userPassword:e.detail.value.Password,
        userTel:e.detail.value.Tel,
        userType:1,
      },
      success: function (res) {
        if (res.data.status == 200) {
          wx.showToast({
            title: "提交成功",
            icon: 'success',
            duration: 1000
          })
          that.setData({ No: '', Password: '' ,Name:'',Type:'',Tel:''});
        } else {
          wx.showToast({
            title: res.data.info,
            icon: 'loading',
            duration: 1500
          })
        }
      }
    })
  }
})