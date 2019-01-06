Page({
  data: {
    showsearch:false,   //显示搜索按钮
    searchtext:'',  //搜索文字
    filterdata:{},  //筛选条件数据
    showfilter:false, //是否显示下拉筛选
    showfilterindex:null, //显示哪个筛选类目
    // sortindex:0,  //一级分类索引
    // sortid:null,  //一级分类id
    // subsortindex:0, //二级分类索引
    // subsortid:null, //二级分类id
    // cityindex:0,  //一级城市索引
    // cityid:null,  //一级城市id
    // subcityindex:0,  //二级城市索引
    // subcityid:null, //二级城市id
    servicelist:[], //服务集市列表
    scrolltop:null, //滚动位置
    page: 0  //分页
  },
  onLoad: function () { //加载数据渲染页面
    this.fetchServiceData();
    //this.fetchFilterData();

    var that = this
    // this.getmsg(0, that.data.counter)


    // wx.request({
    //   url: 'http://shx.nat300.top/api/course/activeCourse',
    //   // method:Post,
    //   // header: { 'Content-Type': 'json' },
    //   method: "POST",
    //   success: function (res) {
    //     // console.log(res.data)      
    //     var coursedata = []
    //     for (var data in res.data.data) {
    //       var temp = {
    //         id: res.data.data[data].id,
    //         courseName: res.data.data[data].courseName,
    //         courseNo: res.data.data[data].courseNo
    //       }
    //       coursedata.push(temp)
    //     }
    //     that.setData({
    //       'coursedata': coursedata
    //     })
    //     // console.log(coursedata);
        
    //   },
        
    // })
    // console.log(this.data)
    // console.log(this.data.coursedata)
  },

  fetchServiceData:function(){  //获取课程列表
    let _this = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    const perpage = 10;
    this.setData({
      page:this.data.page+1
    })
    const page = this.data.page;
    const newlist = [];
    // var newlist1=[];
    // newlist1=this.data.coursedata.value;

    wx.request({
      url: 'http://shx.nat300.top/api/course/activeCourse',
      // method:Post,
      // header: { 'Content-Type': 'json' },
      method: "POST",
      success: function (res) {
        //console.log(res.data)
        for (var i = (page - 1) * perpage; i < page * perpage; i++) {
          newlist.push({
            "id": res.data.data[i].id,
            "courseName": res.data.data[i].courseName,
            "teacher": res.data.data[i].courseTeacherName,
            "tag": res.data.data[i].courseMajor,
            "imgurl": "http://shx.nat300.top"+res.data.data[i].coursePic
          })
        }
      },

    })



  
    setTimeout(()=>{
      _this.setData({
        servicelist:_this.data.servicelist.concat(newlist)
      })
    },1500)
  },
  inputSearch:function(e){  //输入搜索文字
    this.setData({
      showsearch:e.detail.cursor>0,
      searchtext:e.detail.value
    })
  },
  submitSearch:function(){  //提交搜索
    console.log(this.data.searchtext);
    this.fetchServiceData();
  },
  setFilterPanel: function(e){ //展开筛选面板
    const d = this.data;
    const i = e.currentTarget.dataset.findex;
    if(d.showfilterindex == i){
      this.setData({
        showfilter: false,
        showfilterindex: null
      })
    }else{    
      this.setData({
        showfilter: true,
        showfilterindex:i,
      })
    }
    console.log(d.showfilterindex);
  },
  setSortIndex:function(e){ //服务类别一级索引
    const d= this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      sortindex:dataset.sortindex,
      sortid:dataset.sortid,
      subsortindex: d.sortindex==dataset.sortindex ? d.subsortindex:0
    })
    console.log('服务类别id：一级--'+this.data.sortid+',二级--'+this.data.subsortid);
  },
  setSubsortIndex:function(e){ //服务类别二级索引
    const dataset = e.currentTarget.dataset;
    this.setData({
      subsortindex:dataset.subsortindex,
      subsortid:dataset.subsortid,
    })
    console.log('服务类别id：一级--'+this.data.sortid+',二级--'+this.data.subsortid);
  },
  setCityIndex:function(e){ //服务城市一级索引
    const d= this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      cityindex:dataset.cityindex,
      cityid:dataset.cityid,
      subcityindex: d.cityindex==dataset.cityindex ? d.subcityindex:0
    })
    console.log('服务城市id：一级--'+this.data.cityid+',二级--'+this.data.subcityid);
  },
  setSubcityIndex:function(e){ //服务城市二级索引
    const dataset = e.currentTarget.dataset;
    this.setData({
      subcityindex:dataset.subcityindex,
      subcityid:dataset.subcityid,
    })
    console.log('服务城市id：一级--'+this.data.cityid+',二级--'+this.data.subcityid);
  },
  hideFilter: function(){ //关闭筛选面板
    this.setData({
      showfilter: false,
      showfilterindex: null
    })
  },
  scrollHandle:function(e){ //滚动事件
    this.setData({
      scrolltop:e.detail.scrollTop
    })
  },
  goToTop:function(){ //回到顶部
    this.setData({
      scrolltop:0
    })
  },
  scrollLoading:function(){ //滚动加载
    this.fetchServiceData();
  },
  onPullDownRefresh:function(){ //下拉刷新
    this.setData({
      page:0,
      servicelist:[]
    })
    this.fetchServiceData();
    this.fetchFilterData();
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },1000)
  }
})