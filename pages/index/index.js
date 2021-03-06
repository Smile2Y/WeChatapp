//index.js
//获取应用实例
// var app = getApp();
Page({
  data: {
    indexmenu:[],
    imgUrls: []
  },
  onLoad:function(){
    //生命周期函数--监听页面加载
    this.fetchData();
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },
  fetchData:function(){
    this.setData({
      indexmenu:[
        {
          'icon':'./../../images/icon_01.png',
          'text':'教师管理',
          'url':'main/teaching calendar/teachingcald'
        },
        // {
        //   'icon':'./../../images/icon_03.png',
        //   'text':'未命名',
        //   // 'url':'service'
        // },
        {
          'icon':'./../../images/icon_05.png',
          'text':'学生评价',
          'url':'service_s/service_s'
        },
        {
          'icon': './../../images/icon_09.png',
          'text': '同行评价',
          'url': 'service/service'
        },
        {
          'icon':'./../../images/icon_07.png',
          'text':'注册登录',
          'url':'login/login'
        },
       
        {
          'icon':'./../../images/icon_11.png',
          'text':'更多功能',
          'url':'property'
        },
        {
          'icon':'./../../images/icon_13.png',
          'text':'尽情期待',
          'url':'test_page/test_page'
        },
      ],
      imgUrls: [
        '../../image/timg-5.jpeg',
        '../../image/timg.jpeg',
        '../../image/background.png'
      ]
    })
  },
  changeRoute:function(url){
    wx.navigateTo({
      url: `../${url}/${url}`
    })
  },
  onReady:function(){
    //生命周期函数--监听页面初次渲染完成
    // console.log('onReady');
  },
  onShow :function(){
    //生命周期函数--监听页面显示
    // console.log('onShow');
  },
  onHide :function(){
    //生命周期函数--监听页面隐藏
    // console.log('onHide');
  },
  onUnload :function(){
    //生命周期函数--监听页面卸载
    // console.log('onUnload');
  },
  onPullDownRefresh:function(){
    //页面相关事件处理函数--监听用户下拉动作
    // console.log('onPullDownRefresh');
  },
  onReachBottom:function(){
    //页面上拉触底事件的处理函数
    // console.log('onReachBottom');
  }
})
