// pages/main/evaluate openOrclose/evaluateOoC.js
import cookie from '../../../../../vendor/weapp-cookie/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sdates: '2016-11-08',
    stimes: '12:00',
    edates: '2016-11-08',
    etimes: '12:00',
    currentTab: 0,
    bUid: 0,
    opOcl: "关闭课堂评价",
    sdates2: '2016-11-08',
    stimes2: '12:00',
    edates2: '2016-11-08',
    etimes2: '12:00',
    currentTab2: "",
    bUid2: 0,
    opOcl2: "",
    color: "red",
    color2: "",
    id: "",
    flag: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ids = options.id
    var _this = this
    _this.setData({
      id: ids
    })
    wx.request({
      url: 'http://shx.nat300.top/api/course/getCourse',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        "courseType": 1,
        "id": ids
      },
      success: function (res) {
        console.log(res.data)
        console.log("success")
        if (res.data.data.assessFlag =="1") {
          _this.setData({
            currentTab2: 1,
            bUid2: 1,
            opOcl2: "开启课堂评价",
            color2: "white",
            flage: 1
          })
        }
        else _this.setData({
          currentTab2: 0,
          bUid2: 0,
          opOcl2: "关闭课堂评价",
          color2: "red",
          flage: 1
        })
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
  //  点击时间组件确定事件  
  bindTimeChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      stimes2: e.detail.value
    })
  },
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      sdates2: e.detail.value
    })
  },
  //  点击时间组件确定事件  
  ebindTimeChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      etimes2: e.detail.value
    })
  },
  //  点击日期组件确定事件  
  ebindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      edates2: e.detail.value
    })
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
    var _this = this
    let tab = e.currentTarget.id
    if (tab === "0") {
      _this.setData({
        currentTab: 1,
        bUid: 1,
        opOcl: "开启课堂评价",
        color: "white"
      })
    }
    if (tab === "1") {
      _this.setData({
        currentTab: 0,
        bUid: 0,
        opOcl: "关闭课堂评价",
        color: "red"
      })
    }
  },
  switchTab2: function (e) {
    var _this = this
    // console.log(_this.data.id)
    let tab = e.currentTarget.id
    if (tab === "0") {
      _this.setData({
        currentTab2: 1,
        bUid2: 1,
        opOcl2: "开启课程评价",
        color2: "white"
      })
      wx.request({
        url: 'http://shx.nat300.top/api/course/closeCourseAssess',
        method: "POST",
        data: {
          "courseType": 1,
          "courseId": _this.data.id
        },
        success: function (res) {
          wx.showToast({
            title: '关闭成功',
            icon: "success"

          })
        }
      })
    }
    if (tab === "1") {
      _this.setData({
        currentTab2: 0,
        bUid2: 0,
        opOcl2: "关闭课程评价",
        color2: "red"
      })
      wx.showToast({
        title: '请设置开放时间',
        icon: "loading"
      })
    }
  },
  setevaluate: function () {
    var that = this
    console.log(this.data.sdates2 + this.data.stimes2 + this.data.edates2 + this.data.etimes2)
    wx.request({
      url: 'http://shx.nat300.top/api/course/openCourseAssess',
      method: "POST",
      data: {
        "courseId": that.data.id,
        "courseType": 1,
        "startTime": that.data.sdates2 + "T" + that.data.stimes2 + "Z",
        "endTime": that.data.edates2 + "T" + that.data.etimes2 + "Z"
        // "startTime": "2018-01-02T16:00:00.000Z",
        // "endTime": "2019-01-03T16:00:00.000Z"
      },
      success: function (res) {
        wx.showToast({
          title: '开放成功',
          icon: "success"

        })
      }
    })

  }
})