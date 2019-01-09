Page({
  data: {
    //indexmenu: [],
    No:'',
    Password:'',

    submited: false
  },
  onLoad: function () {
    //生命周期函数--监听页面加载
    //this.fetchData();
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },


  inputNo: function (e) {
    this.setData({
      No: e.detail.value
    })
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
    console.log(e.detail.value.Password)
    wx.request({
      url: 'http://shx.nat300.top/api/user/login',
      header: {
      },
      method: "POST",
      data: {
        //method: 'user/register',
        userNo: e.detail.value.No,
        userPassword:e.detail.value.Password,
      },
      success: function (res) {
        console.log(res)
        if (res.data.code == "0") {
          wx.showToast({
            title: "登录成功",
            icon: 'success',
            duration: 1000
          })
        } else {
          wx.showToast({
            //title: res.data.info,
            title:res.data.message,
            icon: 'loading',
            duration: 1500
          })
        }
      }
    })
  }
})