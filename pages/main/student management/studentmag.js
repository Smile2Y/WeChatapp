// pages/main/student management/studentmag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    No:"",
    Tel:"",
    Type:0,
    id:"",
    courseName:"",
    userList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.id=options.id
    this.courseName=options.courseName
    this.setData({
      id:options.id,
      courseName:options.courseName
    })
    console.log(this.id)
    console.log(this.courseName)

    var that = this
    wx.request({
      url: 'http://shx.nat300.top/api/course/getUserLilst',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        "courseId": this.data.id,
        "userType":0
      },
      success: function (e) {
        console.log(e)
        if (e.data.code == '0') {
          console.log("setData")
          that.setData({
            userList: e.data.data
          })
        }
        // console.log(this.data.userList)

      },
      fail:function(error){
        console.log(error)
      }
    })

    console.log("userList")
    console.log(this.data.userList)

  },

  inputNo: function (e) {
    this.setData({
      No: e.detail.value,
    })
  },
  inputTel: function (e) {
    this.setData({
      Tel:e.detail.value
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
    // console.log(No)
    // console.log(Tel)
    // console.log(Type)
    // console.log(id)
    // console.log(courseName)
    var that = this
    wx.request({
      url: 'http://shx.nat300.top/api/course/addUser',
      header: {
      },
      method: "POST",
      data: {
        //method: 'user/register',
        userNo: e.detail.value.No,
        userTel: e.detail.value.Tel,
        userType:0,
        courseId:that.data.id,
        courseName:that.data.courseName
      },
      success: function (res) {

        console.log(e.detail.value.No)
        console.log(e.detail.value.Tel)
        console.log(that.data.courseName)
        console.log(that.data.id)
        if (res.data.code == "0") {
          wx.showToast({
            title: "提交成功",
            icon: 'success',
            duration: 1000
          })
        } else {
          wx.showToast({
            //title: res.data.info,
            title: "提交失败",
            icon: 'loading',
            duration: 1500
          })
        }
      }
    })
  }
})