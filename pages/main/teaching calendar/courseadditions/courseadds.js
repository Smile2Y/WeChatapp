import cookie from '../../../../vendor/weapp-cookie/index'

Page({
  data: {
    industryarr: [],
    industryindex: 0,
    statusarr: [],
    statusindex: 0,
    jobarr: [],
    jobindex: 0,
    courseDescribe:'',
    courseMajor:'',
    courseName:'',
    hasfinancing: false,  //是否已融资
    isorg: false,  //是否是机构
  },
  onLoad: function () {
    this.fetchData()
  },
  fetchData: function () {
    this.setData({
      industryarr: ["请选择", "移动互联网", "手机游戏", "互联网金融", "O2O", "智能硬件", "SNS社交", "旅游", "影视剧", "生活服务", "电子商务", "教育培训", "运动和健康", "休闲娱乐", "现代农业", "文化创意", "节能环保", "新能源", "生物医药", "IT软件", "硬件", "其他"],
      statusarr: ["请选择", "初创时期", "市场扩展期", "已经盈利"],
      jobarr: ["请选择", "创始人", "联合创始人", "产品", "技术", "营销", "运营", "设计", "行政", "其他"]
    })
  },
  bindPickerChange: function (e) { //下拉选择
    const eindex = e.detail.value;
    const name = e.currentTarget.dataset.pickername;
    // this.setData(Object.assign({},this.data,{name:eindex}))
    switch (name) {
      case 'industry':
        this.setData({
          industryindex: eindex
        })
        break;
      case 'status':
        this.setData({
          statusindex: eindex
        })
        break;
      case 'job':
        this.setData({
          jobindex: eindex
        })
        break;
      default:
        return
    }
  },
  setFinance: function (e) { //选择融资
    this.setData({
      hasfinancing: e.detail.value == "已融资" ? true : false
    })
  },
  setIsorg: function (e) { //选择投资主体
    this.setData({
      isorg: e.detail.value == "机构" ? true : false
    })
  },
  // applySubmit: function () {
  //   wx.navigateTo({
  //     url: ''
  //   })
  // },
  chooseimg:function(){
    var that=this
    wx.chooseImage({
      success: function(res) {
        console.log(res)
        // const tempFilePaths = res.tempFilePaths
        // console.log(tempFilePaths)
        that.setData({
          imag:res.tempFilePaths[0]
        })
        console.log("选择图片： "+res.tempFilePaths[0])
      },

    })
  },
  formSubmit:function(res){
    var that=this;
    // console.log(res.detail.value)
    var detail=res.detail.value;
    // console.log(res.detail.value.courseName)
    // console.log(res.detail.value.courseDescribe)

    // wx.request({
    //   url: 'http://shx.nat300.top/api/course/addCourse',
    //   method:"POST",
    //   header: {},
    //   data:{
    //     "courseName": res.detail.value.courseName,
    //     "courseDescribe": res.detail.value.courseDescribe,
    //     "courseMajor": res.detail.value.courseMajor,
    //     // coursePic: that.data.imag
    //   },
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    // console.log(that.data.imag)
      wx.showToast({
        title: '正在上传',
        icon: 'loading',
        duration: 2000
      })
    

    wx.uploadFile({
      url: 'http://shx.nat300.top/api/course/addCourse',
      filePath: that.data.imag,
      header: {
        "content-type": "multipart/form-data",
        "Cookie":"user_token="+cookie.get("user_token")
        },
      name: 'coursePic',
      formData:{
        courseDescribe: res.detail.value.courseDescribe,
        courseMajor: res.detail.value.courseMajor,
        courseName: res.detail.value.courseName,
      },
      success:function(e){
        wx.showToast({
          title: '上传成功',
          icon: 'success',
          duration:1500
        })

        // setTimeout(function () { wx.reLaunch({ url: '../index/index', }) }, 2000)
        setTimeout(function (){
          wx.redirectTo({
            url: '../../teaching calendar/teachingcald',
          })
        },1500)

        
      },
      fail: function (res) {
        wx.showToast({
          title: '上传失败',
          icon:"loading"
        })
      },
     
    })
  }
})