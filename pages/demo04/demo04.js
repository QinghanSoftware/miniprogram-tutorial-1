// pages/demo04/demo04.js
Page({

  /**
   * Page initial data
   */
  data: {
    num:0
  },

  handleInput(e){
    // console.log(e)   打印获取的对象，从中找到input 的值。
    // 即e.detail.value

    console.log(e.detail.value);

    // 赋值 this.set
    this.setData({
      num:e.detail.value
    })
  },

  handleTap(e){
    
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