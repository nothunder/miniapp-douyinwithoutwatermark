App({
  onLaunch: function () {
    var n = this, s = wx.getStorageSync("logs") || [];
    s.unshift(Date.now()), wx.setStorageSync("logs", s), wx.login({
      success: function (n) { }
    }), wx.getSetting({
      success: function (s) {
        s.authSetting["scope.userInfo"] && wx.getUserInfo({
          success: function (s) {
            n.globalData.userInfo = s.userInfo, n.userInfoReadyCallback && n.userInfoReadyCallback(s);
          }
        });
      }
    });
  },
  globalData: {
    Url: "https://p1.music.126.net/",
    url: '假如警察叔叔按时下班…… #劝止酒驾 '+
         'https://v.douyin.com/7kSd9f/', 
    userInfo: null
  }
});
