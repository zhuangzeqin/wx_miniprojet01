// pages/demo18/demo18.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        res:{"header" :{"errMsg":'更新三码(开户名、银行卡号、身份证号)审核次数已达上限可进入下一步!',"error":"温馨提示" , "succeed" :true}}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("onLoad");
        //onLoad 中发送异步请求 初始化数据
        // let res = res?.body?.authAcqCode;//鉴权通道标识
        // console.log("onLoad:"+res);
        let  res ={"header" :{"errMsg":'更新三码(开户名、银行卡号、身份证号)审核次数已达上限可进入下一步!',"error":"温馨提示" , "succeed" :true}};
       let str =  res.hasOwnProperty("body")?'aaa':"bbb";
       console.log(str);


        // if (this.data.res.hasOwnProperty("body")) {
        //     console.log("onLoad:"+res.body);
        //     //存在
        // } else {
        //     //不存在
        //     console.log("onLoad:不存在"+res);
        // }

        // var json = {"key1":"val1","key2":"val2","key3":"val3"};
        

// if(json.hasOwnProperty("key1")){  

// console.log(json["key1]);

// }

// js判断json数据是否存在某字段的方法
// 方式一 !("key" in obj) 
// 复制代码
// if("name" in json){//json就是数组，name是你要找的值
//     console.log("有")
// }else{
//     console.log("无")
// }
// 方式二 obj.hasOwnProperty("key")  //obj为json对象。
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log("onReady");
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        //页面显示的时候调用
        console.log("onShow");
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log("onHide");
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log("onUnload");
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log("onPullDownRefresh");
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log("onReachBottom");
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        console.log("onShareAppMessage");
    }
    ,
    /**
     *页面滚动就触发
     *
     */
    onPageScroll()
    {
        console.log("onPageScroll");
    },
    /**
     *页面尺寸发生改变就会触发
     *
     */
    onResize()
    {
        console.log("onResize");
    }
})