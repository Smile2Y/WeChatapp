// pages/main/evaluate analyze/evaluatelyze.js
var chartsm=require("../../../dist/wxcharts-min.js")
var charts = require("../../../dist/wxcharts.js")
var pieChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  touchHandler: function (e) {

    console.log(pieChart.getCurrentDataIndex(e));

  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var windowWidth = 320;

    try {

      var res = wx.getSystemInfoSync();

      windowWidth = res.windowWidth;

    } catch (e) {

      console.error('getSystemInfoSync failed!');

    }



    pieChart = new charts({

      animation: true,

      canvasId: 'pieCanvas',

      type: 'pie',

      series: [{

        name: '成交量1',

        data: 15,

      }, {

        name: '成交量2',

        data: 35,

      }, {

        name: '成交量3',

        data: 78,

      }, {

        name: '成交量4',

        data: 63,

      }, {

        name: '成交量2',

        data: 35,

      }, {

        name: '成交量3',

        data: 78,

      }, {

        name: '成交量4',

        data: 63,

      }, {

        name: '成交量2',

        data: 35,

      }, {

        name: '成交量3',

        data: 78,

      }, {

        name: '成交量3',

        data: 78,

      }],

      width: windowWidth,

      height: 300,

      dataLabel: true,

    });





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

  }
})