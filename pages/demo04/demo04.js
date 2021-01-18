// pages/demo04/demo04.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value:0
    },

    handlerbindinput(e)
    {
        console.log(e);
        let {value} = e.detail;
        this.setData({
            value
        })
    }
    ,
    /**
     *
     *按钮点击事件的处理
     * @param {*} e 事件源
     */
    handlerbindtab(e)
    {
        console.log(e);
        // const oper = e.currentTarget.dataset.oper
        const {oper} = e.currentTarget.dataset;
        this.setData({
            value:this.data.value+oper
        })
    }
    ,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})