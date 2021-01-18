// pages/demo17/demo17.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: "首页",
        isActive: true,
      },
      {
        id: 1,
        name: "原创",
        isActive: false,
      },
      {
        id: 2,
        name: "分类",
        isActive: false,
      },
      {
        id: 3,
        name: "我的",
        isActive: false,
      },
    ],
  },
  /**
   *父页面实现自定义事件； 接受子组件传递过来的数据
   *
   * @param {*} e
   */
  handleItemChange(e) {
    //接受过来的index 索引
    const{index} = e.detail;

    let { tabs } = this.data;
    //3 循环数组 [].forEach  遍历数组的时候；修改了v;也会导致数组别修改
    tabs.forEach((v, i) =>
      i === index ? (v.isActive = true) : (v.isActive = false)
    );
    //4 重新赋值给tabs
    this.setData({
      tabs,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
