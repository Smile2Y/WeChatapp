// pages/main/evaluate analyze/evaluatelyze.js
import * as echarts from '../../../ec-canvas/echarts';
// var chartsm=require("../../../dist/wxcharts-min.js")
// var charts = require("../../../dist/wxcharts.js")
var pieChart = null;
const app = getApp();
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      data: app.globalData.list,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sdates: '2016-11-08',
    stimes: '12:00',
    edates: '2016-11-08',
    etimes: '12:00',
    objectArray: ['中国', '英国', '美国'],
    index: 0,
    elist: [],
    ec: {},
    id:"",
    flag2:""
  },
  touchHandler: function(e) {
    console.log(pieChart.getCurrentDataIndex(e));
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var windowWidth = 320;
    var that = this
    this.data.id=options.id
    // wx.request({
    //   url: 'http://shx.nat300.top/api/assess/analysis',
    //   method: "POST",
    //   data: {
    //     "courseId": options.id,
    //     "courseType": 0,
    //     "userType": 0,
    //     "startTime": "2018-01-02T16:00:00.000Z",
    //     "endTime": "2019-01-03T16:00:00.000Z"
    //   },
    //   success: function(e) {
    //     var tlist = []
    //     console.log(e.data.data.wxCourseRateList)
    //     for (var keys in e.data.data.wxCourseRateList) {

    //       var temp = {
    //         rateAddtional: e.data.data.wxCourseRateList[keys].rateAddtional
    //       }
    //       tlist.push(temp)

    //     }
    //     console.log(tlist)
    //     that.setData({
    //       elist: tlist
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //  点击时间组件确定事件  
  bindTimeChange: function(e) {
    console.log(e.detail.value)
    this.setData({
      stimes: e.detail.value
    })
  },
  //  点击日期组件确定事件  
  bindDateChange: function(e) {
    console.log(e.detail.value)
    this.setData({
      sdates: e.detail.value
    })
  },
  //  点击时间组件确定事件  
  ebindTimeChange: function(e) {
    console.log(e.detail.value)
    this.setData({
      etimes: e.detail.value
    })
  },
  //  点击日期组件确定事件  
  ebindDateChange: function(e) {
    console.log(e.detail.value)
    this.setData({
      edates: e.detail.value
    })
  },
  echartInit(e) {
    var that = this
    console.log(that.data.sdates)
    wx.request({
      url: 'http://shx.nat300.top/api/assess/analysis',
      method: "POST",
      data: {
        "courseId": that.data.id,
        "courseType": 0,
        // "startTime": that.data.sdates+"T"+that.data.stimes+"Z",
        // "endTime": that.data.edates + "T" + that.data.etimes + "Z"
        "startTime": "2018-01-02T16:00:00.000Z",
        "endTime": "2019-01-03T16:00:00.000Z"
      },
      success: function(res) {

        that.setData({
          flag2: res.data.data.averageRate
        })


        // console.log(res.data.data)
        for (var key in res.data.data.map) {
          if (key != __proto__) {
            var temp = {
              name: key,
              value: res.data.data.map[key]
            }
            app.globalData.list.push(temp)
          }
        }

        var tlist = []
        console.log(res.data.data.wxCourseRateList)
        for (var keys in res.data.data.wxCourseRateList) {

          var temp = {
            rateAddtional: res.data.data.wxCourseRateList[keys].rateAddtional
          }
          tlist.push(temp)

        }
        console.log(tlist)
        that.setData({
          elist: tlist
        })
        // console.log(app.globalData.list+"success")
        initChart(e.detail.canvas, e.detail.width, e.detail.height);
        var listT=[]
        app.globalData.list=listT
      }
    })
  },
  applySubmit: function() {
    var that=this
    var sdates = this.data.sdates
    var stimes = this.data.stimes
    var edates = this.data.edates
    var etimes = this.data.etimes
    console.log(sdates+stimes+edates+etimes)
    wx.request({
      url: 'http://shx.nat300.top/api/assess/analysis',
      method: "POST",
      data: {
        "courseId": this.data.id,
        "courseType": 1,
        "startTime": that.data.sdates+"T"+that.data.stimes+"Z",
        "endTime": that.data.edates + "T" + that.data.etimes + "Z"
      },
      success: function (res) {
        console.log(res.data.data)
        for (var key in res.data.data.map) {
          if (key != __proto__) {
            var temp = {
              name: key,
              value: res.data.data.map[key]
            }
            app.globalData.listB.push(temp)
          }
        }
        wx.navigateTo({
          url: '/pages/main/evaluate analyze/evaluatelyzeChild/analyzechild',
        })
      }
    })
  }

})