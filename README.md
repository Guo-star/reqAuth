# 微信小程序获取权限

> 总有些调皮的测试喜欢拒绝请求的权限

## 使用

``` bash
# 引入
import {reqAuth} from "../../utils/auth.js"

/**
   * 获取权限
   */
  getAuth(){
    let callback = ()=>{
      console.log("callback")
      
      wx.showToast({
        title:"成功",
        icon:"success"
      })
    }
    reqAuth("scope.camera", callback)
  }
```
