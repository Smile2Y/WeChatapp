Page({
  data: {
    id:'',
    courseId:'',
    courseList:[]
  },
  onLoad: function (options) {
    this.courseId = options.courseId;
    this.courseName=options.courseName;
    this.setData({
      courseId:options.courseId,
      courseName:options.courseName
    })
    this.fetchData();

    var that =this
    wx.request({
      url: 'http://shx.nat300.top/api/course/courseCalendar',
      method: "POST",
      data: {
        "id": that.courseId,
      },
      success: function (e) {
        if (e.data.data[0] != null) {
          console.log(e)
          that.setData({
            courseList: e.data.data
          })
        }
      }
    })
    //console.log(this.data.courseId)

  },
  fetchData:function(){
    var that=this;
    //onsole.log(that.courseId)
    wx.request({
      url: 'http://shx.nat300.top/api/course/getCourse',
      // method:Post,
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: "POST",
      data: {
        id: that.courseId,
        courseType:0,
      },
      success: function (res) {
        console.log(res)
        console.log(that.courseId)
        that.setData({
          items:res.data.data,
          imgurl: "http://shx.nat300.top" + res.data.data.coursePic,
        })
      }
      })
    }
  
})
