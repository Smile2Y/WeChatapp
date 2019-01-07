import util from './../../utils/util.js';
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
    //value:[],

    radio: [{
        name:"fsjk",value: '',
    }],

    flag2: 2.5,
  },

  onLoad: function(options) {
    this.courseId = options.courseId;
    this.courseName = options.courseName;
    this.setData({
      courseId: options.courseId,
      courseName: options.courseName
    })
    var that = this
    wx.request({
      url: 'http://shx.nat300.top/api/assess/getNorm',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        normType: 1,
        courseId: that.data.courseId
      },
      success: function(res) {
        console.log(res)
        console.log(this.data.radio[1].value)
        //this.setData({
          console.log(res.data.data[1].normName)
        this.data.radio[1].value = res.data.data[1].normName
        console.log(this.data.radio[1].value)
      //})
      }

    })
    console.log(this.value)

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
    let userRadio = radio.filter((item, index) => {
      return item.checked == true;
    })
    this.setData({
      radio: this.data.radio
    })
    console.log(userRadio)
  },

  formSubmit: function(e) {
    var that = this;
    console.log(that.data.id)
    wx.request({
      url: 'http://shx.nat300.top/api/assess/addAssess',
      // method:Post,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        courseType: 1,
        courseId: that.data.courseId,
        courseName: that.data.courseName,
        rateLevel: flag,
        rateNorm: demoData,
        rateAddtional: demoData,
      },
      success: function(res) {
        console.log(res)
        that.setData({
          items: res.data.data,
          imgurl: "http://shx.nat300.top" + res.data.data.coursePic,
        })
      }
    })
  },

  // getradio2: function (e) {
  //   let index = e.currentTarget.dataset.id;
  //   let radio2 = this.data.radio2;
  //   for (let i = 0; i < radio2.length; i++) {
  //     this.data.radio2[i].checked = false;
  //   }
  //   if (radio2[index].checked) {
  //     this.data.radio2[index].checked = false;
  //   } else {
  //     this.data.radio2[index].checked = true;
  //   }
  //   let userRadio2 = radio2.filter((item, index) => {
  //     return item.checked == true;
  //   })
  //   this.setData({ radio2: this.data.radio2 })
  //   console.log(userRadio2)
  // },

  // getradio3: function (e) {
  //   let index = e.currentTarget.dataset.id;
  //   let radio3 = this.data.radio3;
  //   for (let i = 0; i < radio3.length; i++) {
  //     this.data.radio3[i].checked = false;
  //   }
  //   if (radio3[index].checked) {
  //     this.data.radio3[index].checked = false;
  //   } else {
  //     this.data.radio3[index].checked = true;
  //   }
  //   let userRadio3 = radio3.filter((item, index) => {
  //     return item.checked == true;
  //   })
  //   this.setData({ radio3: this.data.radio3 })
  //   console.log(userRadio3)
  // },

  // getradio4: function (e) {
  //   let index = e.currentTarget.dataset.id;
  //   let radio4 = this.data.radio4;
  //   for (let i = 0; i < radio4.length; i++) {
  //     this.data.radio4[i].checked = false;
  //   }
  //   if (radio4[index].checked) {
  //     this.data.radio4[index].checked = false;
  //   } else {
  //     this.data.radio4[index].checked = true;
  //   }
  //   let userRadio4 = radio4.filter((item, index) => {
  //     return item.checked == true;
  //   })
  //   this.setData({ radio4: this.data.radio4 })
  //   console.log(userRadio4)
  // },

  // getradio5: function (e) {
  //   let index = e.currentTarget.dataset.id;
  //   let radio5 = this.data.radio5;
  //   for (let i = 0; i < radio5.length; i++) {
  //     this.data.radio5[i].checked = false;
  //   }
  //   if (radio5[index].checked) {
  //     this.data.radio5[index].checked = false;
  //   } else {
  //     this.data.radio5[index].checked = true;
  //   }
  //   let userRadio5 = radio5.filter((item, index) => {
  //     return item.checked == true;
  //   })
  //   this.setData({ radio5: this.data.radio5 })
  //   console.log(userRadio5)
  // },
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
  chooseImage: function() {
    let _this = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function(res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            _this.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            _this.chooseWxImage('camera')
          }
        }
      }
    })
  },
  chooseWxImage: function(type) {
    let _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function(res) {
        _this.setData({
          uploadimgs: _this.data.uploadimgs.concat(res.tempFilePaths)
        })
      }
    })
  },
  editImage: function() {
    this.setData({
      editable: !this.data.editable
    })
  },
  deleteImg: function(e) {
    console.log(e.currentTarget.dataset.index);
    const imgs = this.data.uploadimgs
    Array.prototype.remove = function(i) {
      const l = this.length;
      if (l == 1) {
        return []
      } else if (i > 1) {
        return [].concat(this.splice(0, i), this.splice(i + 1, l - 1))
      }
    }
    this.setData({
      uploadimgs: imgs.remove(e.currentTarget.dataset.index)
    })
  },
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