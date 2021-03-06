// pages/demo17/demo17.js
Page({

  /**
   * Page initial data
   */
  data: {

    tabs:[
      {
        id:0,
        name:"首页",
        isActive:true
      },
      {
        id:1,
        name:"原创",
        isActive:false
      },
      {
        id:2,
        name:"分类",
        isActive:false
      },
      {
        id:3,
        name:"关于",
        isActive:false
      },

    ]
  },

  handleItemChange(e){
    // console.log(e) 
    // 在里面寻找index存放的位置

    // console.log(e.detail.index)
    
    let index = e.detail.index

    // console.log(this.data.tabs)
    let tabs = this.data.tabs

    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);

      this.setData({
        tabs
      })  

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})