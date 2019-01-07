Page({
  data: {
    radio: [
      { 'value': '北京' },
      { 'value': '广州' },
      { 'value': '上海' },
      { 'value': '沈阳' }
    ]
  },

  //单选
  getradio: function (e) {
    let index = e.currentTarget.dataset.id;
    let radio = this.data.radio;
    for (let i = 0; i < radio.length; i++) {
      this.data.radio[i].checked = false;
    }
    if (radio[index].checked) {
      this.data.radio[index].checked = false;
    } else {
      this.data.radio[index].checked = true;
    }
    let userRadio = radio.filter((item, index) => {
      return item.checked == true;
    })
    this.setData({ radio: this.data.radio })
    console.log(userRadio)
  }
})
