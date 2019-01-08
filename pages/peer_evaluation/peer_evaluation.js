import util from './../../utils/util.js';
import cookie from '../../vendor/weapp-cookie/index';
var app = getApp()
var count = 0;
Page({
  data: {
    showtab: 0, //顶部选项卡索引
    showtabtype: '', //选中类型
    showfootertab: 0, //底部标签页索引
    tabnav: {}, //顶部选项卡数据
    questionsall: [], //所有问题
    questions: [], //问题列表
    showquestionindex: null, //查看问题索引,
    uploadimgs: [], //上传图片列表
    editable: false, //是否可编辑
    checitems: [],
    // selected:null,
    selectedid: null,
    content:'',
    radio: [],
    userRadio:[],
    com:'',

    flag2: 2,
    courseId:'',
    courseName:'',
    courseType:'',
    courseNormId:''
  },

  onLoad: function(options) {
    this.data.courseId = options.courseId;
    this.data.courseName = options.courseName;
    this.data.courseType=options.courseType;
    this.data.courseNormId=options.courseNormId
    this.setData({
      courseId: options.courseId,
      courseName: options.courseName,
      courseType:options.courseType,
      courseNormId:options.courseNormId
    })
    console.log(this.data.courseId)
    var that = this
    wx.request({
      url: 'http://shx.nat300.top/api/assess/getNorm',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        normType: 1,
        courseId: that.data.courseNormId
      },
      success: function(res) {
        var normList = []
        for (var i = 0; i < res.data.data.length; i++) {
          var norm = {
            value: res.data.data[i].id,
            name: res.data.data[i].normName
          }
          normList.push(norm)
        }
        //console.log(normList)
        that.setData({
          radio: normList
        })
      }

    })
    //console.log(this.value)

  },
  //单选
  getradio: function(e) {
    let index = e.currentTarget.dataset.id;
    let radio = this.data.radio;
    for (let i = 0; i < radio.length; i++) {
      //this.data.radio[i].checked = false;
    }
    if (radio[index].checked) {
      this.data.radio[index].checked = false;
    } else {
      this.data.radio[index].checked = true;
    }
    this.data.userRadio = radio.filter((item, index) => {
      return item.checked == true;
    })
    //console.log(userRadio)

    //console.log(this.data.com)
    this.setData({
      radio: this.data.radio,
      userRadio: this.data.userRadio,
      //com:this.data.com
    })
    //console.log(this.data.com)
    //console.log(radio)
  },
  // onShow:function(e){
  //   var arr = this.data.userRadio;

  //   for (var i = 0, len = arr.length; i < len; i++) {
  //     console.log(arr[i].value);//遍历输出
  //     this.data.com = this.data.com+',' + arr[i].value;//赋结新值
  //     console.log(this.data.com)
  //   }
  // },

  bindinput:function(e){
    this.setData({
      content:e.detail.value
    })

  },

  chooseimg: function () {
    var that = this
    wx.chooseImage({
      success: function (res) {
        console.log(res)
        // const tempFilePaths = res.tempFilePaths
        console.log(res.tempFilePaths)
        that.setData({
          imag: res.tempFilePaths[0]
        })
        //console.log(res)
        //console.log("选择图片： " + res.tempFilePaths[0])
        //console.log(res.tempFiles)
        console.log(that.data.imag)
      },

    })
  },

  formSubmit: function(e) {
    var that = this;
    var arr = that.data.userRadio;
    for (var i = 0, len = arr.length; i < len; i++) {
      //console.log(arr[i].value);//遍历输出
      that.data.com = that.data.com + ',' + arr[i].value;//赋结新值
    }
    that.setData({
      com:that.data.com
    })
    //console.log(that.data.content)
    //console.log(that.data.com)
    //console.log(that.data.uploadimgs)
    wx.uploadFile({
      url: 'http://shx.nat300.top/api/assess/addAssess',
      filePath: that.data.imag,
      header: {
        "content-type": "multipart/form-data",
        "Cookie": "user_token=" + cookie.get("user_token")
      },
      name: 'pic',
      formData: {
        courseType: that.data.courseType,
        courseId: that.data.courseId,
        courseName: that.data.courseName,
        rateLevel: that.data.flag2,
        rateNorm: that.data.com,
        rateAddtional: that.data.content
      },
      success: function (res) {
        res.data = JSON.parse(res.data)
        console.log(res)
        console.log(res.data.code)
        if(res.data.code==="0"){
          wx.showToast({
            title: '上传成功',
            icon: 'success',
            duration: 1500
          })
        }else{
          wx.showToast({
            title: res.data.message,
            icon: 'loading',
            duration: 1500
          })
        }
      },fail: function(e){
        console.log(e)
      }
      
      })
    // wx.request({
    //   url: 'http://shx.nat300.top/api/assess/addAssess',
    //   // method:Post,
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     //'Content-Type': "multipart/form-data",
    //     //"Cookie": "user_token=" + cookie.get("user_token")
    //   },
    //   method: "POST",
    //   formdata: {
    //     pic:that.data.uploadimgs,
    //     courseType: 0,
    //     courseId: that.data.courseId,
    //     courseName: that.data.courseName,
    //     rateLevel: that.data.flag2,
    //     rateNorm: that.data.com,
    //     rateAddtional: that.data.content
    //   },
    //   success: function(res) {
    //     console.log(res)
    //     if (res.data.code == "0") {
    //       wx.showToast({
    //         title: "提交成功",
    //         icon: 'success',
    //         duration: 1000
    //       })
    //     } else {
    //       wx.showToast({
    //         //title: res.data.info,
    //         title: "课程不在评价时间段",
    //         icon: 'loading',
    //         duration: 1500
    //       })
    //     }
    //   }
    // })
  },

  changeColor11: function() {
    var that = this;
    that.setData({
      flag2: 1
    });
    console.log(that.flag2)
  },
  changeColor12: function() {
    var that = this;
    that.setData({
      flag2: 2
    });
  },
  changeColor13: function() {
    var that = this;
    that.setData({
      flag2: 3
    });
  },
  changeColor14: function() {
    var that = this;
    that.setData({
      flag2: 4
    });
  },
  changeColor15: function() {
    var that = this;
    that.setData({
      flag2: 5
    });
  },




  // onSelectTag: function (e) {
  //   const eid = e.currentTarget.dataset.id;
  //   var selected = this.data.selected;
  //   this.setData({
  //     //selected:selected.indexOf(eid)>-1?selected.filter(i=>i!=eid):selected.concat(eid),
  //     selectedid: eid
  //   })
  //   console.log(this.data.selectedid);
  // },


  // chooseImage: function() {
  //   let _this = this;
  //   wx.showActionSheet({
  //     itemList: ['从相册中选择', '拍照'],
  //     itemColor: "#f7982a",
  //     success: function(res) {
  //       if (!res.cancel) {
  //         if (res.tapIndex == 0) {
  //           _this.chooseWxImage('album')
  //         } else if (res.tapIndex == 1) {
  //           _this.chooseWxImage('camera')
  //         }
  //       }
  //     }
  //   })
  // },
  // chooseWxImage: function(type) {
  //   let _this = this;
  //   wx.chooseImage({
  //     sizeType: ['original', 'compressed'],
  //     sourceType: [type],
  //     success: function(res) {
  //       _this.setData({
  //         uploadimgs: _this.data.uploadimgs.concat(res.tempFilePaths)
  //       })
  //     }
  //   })
  // },
  // editImage: function() {
  //   this.setData({
  //     editable: !this.data.editable
  //   })
  // },
  // deleteImg: function(e) {
  //   console.log(e.currentTarget.dataset.index);
  //   const imgs = this.data.uploadimgs
  //   Array.prototype.remove = function(i) {
  //     const l = this.length;
  //     if (l == 1) {
  //       return []
  //     } else if (i > 1) {
  //       return [].concat(this.splice(0, i), this.splice(i + 1, l - 1))
  //     }
  //   }
  //   this.setData({
  //     uploadimgs: imgs.remove(e.currentTarget.dataset.index)
  //   })
  // },
  // questionSubmit: function() {},

  chooseicon: function(e) {

    var strnumber = e.target.dataset.id;
    var _obj = {};
    _obj.curHdIndex = strnumber;
    this.setData({
      tabArr: _obj
    });

  },

})