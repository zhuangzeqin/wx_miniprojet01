
/**
 *
 *封装自己的分享函数
 * @param {*} title
 * @param {*} path
 * @param {*} callback
 * @param {*} imageUrl
 * @return {*} 
 */
function onShareAppMessage(title,path,callback,imageUrl){

    let defaultImageUrl = 'icons/hp_nor.png';
  
    return {
      title: title,
      path: path,
      imageUrl: imageUrl || defaultImageUrl,
      success(res) {
        console.log("转发成功！");
        console.log(res)
        if (!res.shareTickets) {
          //分享到个人
          console.log("shareFriendSuccess!");
          callback && callback();
        } else {
          //分享到群
          let st = res.shareTickets[0];
          wx.getShareInfo({
            shareTicket: st,
            success(res) {
              let iv = res.iv
              let encryptedData = res.encryptedData;
              console.log("groupShareSuccess!");
              //执行转发成功以后的回调函数
              callback && callback();
              
            }
          });
        }
      },
      fail: function (res) {
        console.log("转发失败！");
      }
    };
  }