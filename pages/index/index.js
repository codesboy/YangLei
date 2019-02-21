//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        hearts: [
        ]
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        this.heart();
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        document.write(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },

    heart: function() {
        var N = 25;
        var i, j;
        const MINVALUE = 5
        const SPACE = 15
        // document.write("请输入你的心的最大宽度: ");
        // scanf_s("%d", & N);
        // document.write("你的心最宽为:%d\n", N);
        var nRow = ((N - 3) / 2 - MINVALUE) / 4 + 1;
        var arr1 =[]
 

        for (i = 1; i <= nRow; i++) {
            var arr_1 = []
            for (j = 1; j <= SPACE; j++)
                arr_1.push('')
            for (j = 1; j <= 2 * (nRow - i) + 1; j++)
                arr_1.push('')
            for (j = 1; j <= (N - 3) / 2 - 4 * (nRow - i); j++)
                arr_1.push('*')
            for (j = 1; j <= 4 * (nRow - i) + 1; j++)
                arr_1.push('')
            for (j = 1; j <= (N - 3) / 2 - 4 * (nRow - i); j++)
                arr_1.push('*')
            arr1.push(arr_1)
        }
        this.setData({
            hearts:arr1
        })
        // for (i = 1; i <= 3; i++) {
        //     for (j = 1; j <= SPACE; j++)
        //         this.setData={}
        //     for (var j = 1; j <= N; j++)
        //         document.write("*");
        //     document.write("<br>");
        // }

        // for (i = 1; i <= (N - 1) / 4; i++) {
        //     for (j = 1; j <= SPACE; j++)
        //         this.setData={}
        //     if (i == 1) {
        //         this.setData={}
        //         for (j = 1; j <= N - 2 * i; j++)
        //             document.write("*");
        //     } else {
        //         for (j = 1; j <= 2 * i - 1; j++)
        //             this.setData={}
        //         for (j = 1; j <= N - 2 - 4 * (i - 1); j++)
        //             document.write("*");
        //     }
        //     document.write("<br>");
        // }
        // for (j = 1; j <= SPACE; j++)
        //     this.setData={}
        // for (j = 1; j <= 2 * ((N - 1) / 4); j++)
        //     this.setData={}
    }
})