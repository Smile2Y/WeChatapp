Page({
  data: {
  },
  onLoad: function (options) {
    const i = options.id;
    this.fetchData(i);
    console.log(id)

    
    //var that=this;
    // this.setData({
    //   servicedetail:{
    //     "id":id,
    //     "name":courseName,
    //     "tag":tag,
    //     "teacher":teacher,
    //     "imgurl":imgurl
    //   }
    // })
    // wx.setNavigationBarTitle({
    //   name: this.data.servicedetail.courseName
    // })
  },
  // servicedetail(){
  //   var that =this;
  //   var obj={};
  //   obj.id="id";
  //   obj.courseName="courseName"
  //   obj.teacher="teacher"
  //   obj.tag="tag"
  //   //obj.imgurl="imgurl"
  //   let servicedetail=that.data.servicedetail;
  //   servicedetail.push(obj);
  //   that.setData({servicedetail});
  //   console.log(that.data.servicedetail);

  // },
  fetchData:function(i){
    var that=this;
    wx.request({
      url: 'http://shx.nat300.top/api/course/activeCourse',
      // method:Post,
      // header: { 'Content-Type': 'json' },
      method: "POST",
      success: function (res) {
        console.log(res)
        that.setData({
          items:res.data.data[i],
          imgurl: "http://shx.nat300.top" + res.data.data[i].coursePic
        })


      }
      })
    }
  
})
