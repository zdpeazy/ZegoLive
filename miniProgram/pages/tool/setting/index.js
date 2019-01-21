// pages/setting/index.js
let globalData = getApp().globalData;
let {liveAppID, rtcAppID, tokenURL, roomListURL, wsServerURL} = globalData;

let _methods = {
    inputChange({detail, target}) {
        console.log('inputChange', detail, target);
        let name = target.dataset.name, value = detail.value;
        switch (name) {
            case 'liveAppID':
                this.setData({
                    _liveAppID: value
                });
                break;
            case 'rtcAppID':
                this.setData({
                    _rtcAppID: value
                });
                break;
            case 'tokenURL':
                this.setData({
                    _tokenURL: value
                });
                break;
            case 'serverURL':
                this.setData({
                    _wsServerURL: value
                });
                break;
            case 'roomListURL':
                this.setData({
                    _roomListURL: value
                });
                break;
            default :
                break;
        }

    },
    submit() {
        if (this.data._liveAppID !== liveAppID ||
            this.data._rtcAppID !== rtcAppID ||
            this.data._tokenURL !== tokenURL ||
            this.data._roomListURL !== roomListURL ||
            this.data._wsServerURL !== wsServerURL
        ) {
            wx.showModal({
                content: '确定要修改么？',
                success: (res) => {
                    if (res.confirm) {

                        globalData.liveAppID = this.data._liveAppID;
                        globalData.rtcAppID = this.data._rtcAppID;
                        globalData.tokenURL = this.data._tokenURL;
                        globalData.roomListURL = this.data._roomListURL;
                        globalData.wsServerURL = this.data._wsServerURL;

                        wx.navigateBack();
                    }
                }
            })
        } else {
            wx.navigateBack();
        }
    },
    reset() {

        globalData.liveAppID = 1739272706;
        globalData.rtcAppID = 1082937486;
        globalData.tokenURL = "https://wssliveroom-demo.zego.im/token";
        globalData.roomListURL = "https://liveroom1739272706-api.zego.im/demo/roomlist?appid=1739272706";
        globalData.wsServerURL = "wss://wssliveroom-demo.zego.im/ws";
        globalData.logServerURL = "https://wsslogger-demo.zego.im/httplog";

        wx.navigateBack();
    }
};

Page({

    /**
     * 页面的初始数据
     */
    data: {
        _liveAppID: liveAppID,
        _rtcAppID: rtcAppID,
        _tokenURL: tokenURL,
        _roomListURL: roomListURL,
        _wsServerURL: wsServerURL
    },

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
        liveAppID = getApp().globalData.liveAppID;
        rtcAppID = getApp().globalData.rtcAppID;
        tokenURL = getApp().globalData.tokenURL;
        roomListURL = getApp().globalData.roomListURL;
        wsServerURL = getApp().globalData.wsServerURL;
        this.setData({
            _liveAppID: liveAppID,
            _rtcAppID: rtcAppID,
            _tokenURL: tokenURL,
            _roomListURL: roomListURL,
            _wsServerURL: wsServerURL
        })
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

    },
    ..._methods
});