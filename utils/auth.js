const scopeList = {
  "scope.userInfo": "用户信息",
  "scope.userLocation": "地理位置",
  "scope.address": "通讯地址",
  "scope.invoiceTitle": "发票抬头",
  "scope.werun": "微信运动步数",
  "scope.record": "录音功能",
  "scope.writePhotosAlbum": "保存到相册",
  "scope.camera": "摄像头",
}

/**
 * 请求用户权限问题
 * @param {Str} auth 权限码
 * @param {Func} callback 通过权限后执行的函数
 */

function reqAuth(auth, callback) {

  wx.getSetting({
    // 查询权限
    success(getSet) {
      if (!getSet.authSetting[auth]) {
        // 没有这个权限
        wx.authorize({
          // 直接请求权限
          scope: auth,
          success(req) {
            // 通过权限
            callback()
          },
          fail() {
            // 不通过权限
            wx.showModal({
              content: `必须打开${scopeList[auth]}权限才可以继续操作！`,
              success(modalres){
                if(modalres.confirm){
                  wx.openSetting()
                }
              }
            })
          }
        })
      } else {
        // 已经有权限
        callback()
      }
    }
  })

}

module.exports = {
  reqAuth: reqAuth
}