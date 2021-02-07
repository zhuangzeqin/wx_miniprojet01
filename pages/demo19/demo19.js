// pages/demo19/demo19.js
import { onShareAppMessage } from "../../utils/shareUtils.js";
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    /**
     * 拨打电话
     * @param {*} e 
     */

    handleCallPhone(e)
    {
        console.log(e);
        wx.makePhoneCall({
            phoneNumber: "15019437321",
            success: (result) => {
                console.log(result);
            },
            fail: (error) => {
                console.log(error);
            },
            complete: () => {}
        });
          
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
        console.log('inform detail onShareAppMessage');

        let title = `班级助手`;;
        let path = '/pages/demo09/demo09?type=inform&id='+informid;
        let shareCallBack = () => {
            console.log('share call back suc')
        };
        //此处调用封装好的分享代码
        return onShareAppMessage(title, path, shareCallBack);
    }
})