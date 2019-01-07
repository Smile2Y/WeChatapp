Page({
  data: {
  },
  onLoad: function (options) {
    this.courseId = options.courseId;
    this.courseName=options.courseName;
    this.setData({
      courseId:options.courseId,
      courseName:options.courseName
    })
    this.fetchData();

  },
  fetchData:function(){
    var that=this;
    console.log(that.data.id)
    wx.request({
      url: 'http://shx.nat300.top/api/course/getCourse',
      // method:Post,
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: "POST",
      data: {
        id: that.data.courseId
        //console.log(that.data.id)
      },
      success: function (res) {
        console.log(res)
        that.setData({
          items:res.data.data,
          imgurl: "http://shx.nat300.top" + res.data.data.coursePic,
        })
      }
      })
    }
  
})
