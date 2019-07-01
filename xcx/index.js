//index.js
Page({
  data: {
    text: 'init data',
    num: 0,
    array: [{ text: 'init data' },{key:'array2'}],
    view:'a',
    array2:[1,2,3,4,5,6],
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    object: {
      text: 'init data'
    }
  },
  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function () {
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function () {
    // you can use this way to modify a danamic data path
    this.data.vue = this.data.array[1].key
    this.setData({
      'array[0].text': this.data.vue
    })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  },
  add:function(){
    this.setData({
      num:this.data.num+1
    })
  }
})