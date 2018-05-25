var app      = getApp();

var pageData = {
  data: {"text1":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:46.875rpx;font-weight:bold;height:58.59375rpx;line-height:93.75rpx;margin-left:auto;margin-right:auto;margin-top:0;opacity:1;text-align:center;","content":"\u8fd1\u4f3c\u6848\u4f8b","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","isWordWrap":0,"dataObject":false,"word-wrap":2,"phoneNumberSource":"static","phoneDisplayContent":"static"},"animations":[],"hidden":false,"page_form":"","compId":"text1","markColor":"","mode":0},"breakline2":{"type":"breakline","style":"border-width:7.03125rpx;border-bottom-style:solid;margin-top:11.71875rpx;margin-left:auto;margin-right:auto;width:656.25rpx;border-bottom-color:rgb(125, 128, 137);","content":"<div><\/div>","customFeature":[],"animations":[],"hidden":false,"page_form":"","compId":"breakline2"},"text3":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:58.59375rpx;line-height:58.59375rpx;margin-left:auto;margin-right:auto;margin-top:23.4375rpx;opacity:1;text-align:left;width:703.125rpx;","content":"\u521b\u5efa\u4eba\uff1a***\n\u521b\u5efa\u76ee\u7684\uff1aAI\u4ece\u6570\u636e\u5e93\u4e2d\u9009\u51fa\u4e86\u5f88\u591a\u770b\u4f3c\u8fd1\u4f3c\u7684\u6848\u4ef6\uff0c\u9700\u8981\u60a8\u6839\u636e\u60a8\u7684\u7ecf\u9a8c\u5224\u65ad\u8fd9\u4e9b\u6848\u4f8b\u662f\u5426\u662f\u8fd1\u4f3c\u7684\u3002","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","isWordWrap":0,"dataObject":false,"word-wrap":2,"phoneNumberSource":"static","phoneDisplayContent":"static"},"animations":[],"hidden":false,"page_form":"","compId":"text3","markColor":"","mode":0},"breakline4":{"type":"breakline","style":"border-width:7.03125rpx;border-bottom-style:solid;margin-top:46.875rpx;margin-left:auto;margin-right:auto;width:656.25rpx;border-bottom-color:rgb(125, 128, 137);","content":"<div><\/div>","customFeature":[],"animations":[],"hidden":false,"page_form":"","compId":"breakline4"},"text5":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:58.59375rpx;line-height:58.59375rpx;margin-left:auto;margin-right:auto;margin-top:9.375rpx;opacity:1;text-align:left;","content":"       ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","isWordWrap":0,"dataObject":false,"word-wrap":2,"phoneNumberSource":"static","phoneDisplayContent":"static"},"animations":[],"hidden":false,"page_form":"","compId":"text5","markColor":"","mode":0},"text6":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:58.59375rpx;line-height:58.59375rpx;margin-left:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;text-align:left;width:703.125rpx;","content":"1.  \u5317\u4eac\u5947\u864e\u79d1\u6280\u6709\u9650\u516c\u53f8\u7b49\u4e0e\u817e\u8baf\u79d1\u6280\uff08\u6df1\u5733\uff09\u6709\u9650\u516c\u53f8\u7b49\u4e0d\u6b63\u5f53\u7ade\u4e89\u7ea0\u7eb7\u4e0a\u8bc9\u6848\u3010\u6700\u9ad8\u4eba\u6c11\u6cd5\u9662\uff082013\uff09\u6c11\u4e09\u7ec8\u5b57\u7b2c5\u53f7\u6c11\u4e8b\u5224\u51b3\u4e66\u3011","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","isWordWrap":0,"dataObject":false,"word-wrap":2,"phoneNumberSource":"static","phoneDisplayContent":"static"},"animations":[],"hidden":false,"page_form":"","compId":"text6","markColor":"","mode":0},"text7":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:58.59375rpx;line-height:58.59375rpx;margin-left:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;text-align:left;width:703.125rpx;","content":"2.  \u5317\u4eac\u5947\u864e\u79d1\u6280\u6709\u9650\u516c\u53f8\u7b49\u4e0e\u817e\u8baf\u79d1\u6280\uff08\u6df1\u5733\uff09\u6709\u9650\u516c\u53f8\u7b49\u4e0d\u6b63\u5f53\u7ade\u4e89\u7ea0\u7eb7\u4e0a\u8bc9\u6848\u3010\u6700\u9ad8\u4eba\u6c11\u6cd5\u9662\uff082013\uff09\u6c11\u4e09\u7ec8\u5b57\u7b2c5\u53f7\u6c11\u4e8b\u5224\u51b3\u4e66\u3011","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","isWordWrap":0,"dataObject":false,"word-wrap":2,"phoneNumberSource":"static","phoneDisplayContent":"static"},"animations":[],"hidden":false,"page_form":"","compId":"text7","markColor":"","mode":0},"text8":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:58.59375rpx;line-height:58.59375rpx;margin-left:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;text-align:left;width:703.125rpx;","content":"3.  \u5317\u4eac\u8da3\u62ff\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8\u4e0e\u5e7f\u5dde\u5e02\u53bb\u54ea\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8\u4e0d\u6b63\u5f53\u7ade\u4e89\u7ea0\u7eb7\u4e0a\u8bc9\u6848\u3010\u5e7f\u4e1c\u7701\u9ad8\u7ea7\u4eba\u6c11\u6cd5\u9662\uff082013\uff09\u7ca4\u9ad8\u6cd5\u6c11\u4e09\u7ec8\u5b57\u7b2c565\u53f7\u6c11\u4e8b\u5224\u51b3\u4e66\u3011","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","isWordWrap":0,"dataObject":false,"word-wrap":2,"phoneNumberSource":"static","phoneDisplayContent":"static"},"animations":[],"hidden":false,"page_form":"","compId":"text8","markColor":"","mode":0},"text9":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:58.59375rpx;line-height:58.59375rpx;margin-left:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;text-align:left;width:703.125rpx;","content":"4.  \u6df1\u5733\u5e02\u817e\u8baf\u8ba1\u7b97\u673a\u7cfb\u7edf\u6709\u9650\u516c\u53f8\u4e0e\u5e7f\u5dde\u7f51\u6613\u8ba1\u7b97\u673a\u7cfb\u7edf\u6709\u9650\u516c\u53f8\u7b49\u4fb5\u5bb3\u97f3\u4e50\u4f5c\u54c1\u4fe1\u606f\u7f51\u7edc\u4f20\u64ad\u6743\u8bc9\u524d\u7981\u4ee4\u7ea0\u7eb7\u6848\u3010\u6e56\u5317\u7701\u6b66\u6c49\u5e02\u4e2d\u7ea7\u4eba\u6c11\u6cd5\u9662\uff082014\uff09\u9102\u6b66\u6c49\u4e2d\u77e5\u7981\u5b57\u7b2c5\u53f7\u30015-1\u53f7\u30015-2\u53f7\u6c11\u4e8b\u88c1\u5b9a\u4e66\u3011","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","isWordWrap":0,"dataObject":false,"word-wrap":2,"phoneNumberSource":"static","phoneDisplayContent":"static"},"animations":[],"hidden":false,"page_form":"","compId":"text9","markColor":"","mode":0},"text10":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:58.59375rpx;line-height:58.59375rpx;margin-left:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;text-align:left;width:703.125rpx;","content":"5.  \u6df1\u5733\u5e02\u817e\u8baf\u8ba1\u7b97\u673a\u7cfb\u7edf\u6709\u9650\u516c\u53f8\u4e0e\u5e7f\u5dde\u7f51\u6613\u8ba1\u7b97\u673a\u7cfb\u7edf\u6709\u9650\u516c\u53f8\u7b49\u4fb5\u5bb3\u97f3\u4e50\u4f5c\u54c1\u4fe1\u606f\u7f51\u7edc\u4f20\u64ad\u6743\u8bc9\u524d\u7981\u4ee4\u7ea0\u7eb7\u6848\u3010\u6e56\u5317\u7701\u6b66\u6c49\u5e02\u4e2d\u7ea7\u4eba\u6c11\u6cd5\u9662\uff082014\uff09\u9102\u6b66\u6c49\u4e2d\u77e5\u7981\u5b57\u7b2c5\u53f7\u30015-1\u53f7\u30015-2\u53f7\u6c11\u4e8b\u88c1\u5b9a\u4e66\u3011","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","isWordWrap":0,"dataObject":false,"word-wrap":2,"phoneNumberSource":"static","phoneDisplayContent":"static"},"animations":[],"hidden":false,"page_form":"","compId":"text10","markColor":"","mode":0},"layout_vessel11":{"type":"layout-vessel","style":"background-color:rgba(0, 0, 0, 0);opacity:1;min-height:auto;margin-left:auto;","content":{"leftEles":[{"type":"button","style":"background-color:#3091f2;border-color:#3091f2;border-radius:4.6875rpx;border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:32.8125rpx;height:82.03125rpx;line-height:82.03125rpx;margin-left:auto;margin-right:auto;opacity:1;text-align:center;width:281.25rpx;","content":"\u6b63\u786e","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content.leftEles[0]","parentCompid":"layout_vessel11"}],"rightEles":[{"type":"button","style":"background-color:#3091f2;border-color:#3091f2;border-radius:4.6875rpx;border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:32.8125rpx;height:82.03125rpx;line-height:82.03125rpx;margin-left:auto;margin-right:auto;opacity:1;text-align:center;width:281.25rpx;","content":"\u9519\u8bef","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content.rightEles[0]","parentCompid":"layout_vessel11"}]},"customFeature":{"CellBorderColor":"rgb(102, 102, 102)","CellBorderStyle":"none","CellBorderWidth":"2px","action":"none","cellWidth":50,"page-link":"prePage","phone-num":""},"animations":[],"hidden":false,"page_form":"","compId":"layout_vessel11","cell_style_1":"width:50%;margin-left:auto;","cell_style_2":"width:50%;border-left-style:none;border-left-width:4.6875rpx;border-color:rgb(102, 102, 102);margin-left:auto;"},"button12":{"type":"button","style":"background-color:#3091f2;border-color:#3091f2;border-radius:4.6875rpx;border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:37.5rpx;height:82.03125rpx;line-height:82.03125rpx;margin-left:auto;margin-right:auto;margin-top:46.875rpx;opacity:1;text-align:center;width:656.25rpx;","content":"\u63d0\u4ea4","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","segment":""},"animations":[],"hidden":false,"page_form":"","compId":"button12"},"has_tabbar":0,"page_hidden":true,"page_form":"","top_nav":{"navigationBarTitleText":"\u8fd1\u4f3c\u6848\u4f8b"},"dataId":""},
    need_login: false,
    page_router: 'page10056',
    page_form: 'none',
      dataId: '',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      tostoreComps: [],
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      seckillOnLoadCompidParam: [],
      dynamicClassifyGroupidsParams: [],
      newClassifyGroupidsParams: [],
      videoListComps: [],
      videoProjectComps: [],
      newsComps: [],
      popupWindowComps: [],
      returnToVersionFlag: true,
  requesting: false,
  requestNum: 1,
  modelChoose: [],
  modelChooseId: '',
  modelChooseName: [],
  onLoad: function (e) {
    if (e.statisticsType == 11) {
      delete e.statisticsType
      delete e.needStatistics
    }
    app.onPageLoad(e);
    app.isNeedRewardModal();
  },
  dataInitial: function () {
    app.pageDataInitial();
  },
  onShareAppMessage: function (e) {
    let that = this;
    return app.onPageShareAppMessage(e, function (addTime) {
      app.showToast({ title: '转发成功', duration: 500 });
      // 转发获取积分
      app.sendRequest({
        hideLoading: true,
        url: '/index.php?r=appShop/getIntegralLog',
        data: { add_time: addTime },
        success: function (res) {
          if (res.status == 0) {
            res.data && that.setData({
              'rewardPointObj': {
                showModal: true,
                count: res.data,
                callback: ''
              }
            });
          }
        }
      })
    });
  },
  onShow: function () {
    app.onPageShow();
  },
  reachBottomFuc: [],
  onReachBottom: function () {
    app.onPageReachBottom( this.reachBottomFuc );
  },
  onUnload: function () {
    app.onPageUnload();
  },
  connectWifiHandler:function(e){
    app.connectWifiHandler(e)
  },
  tapPrevewPictureHandler: function (e) {
    app.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function () {
    app.suspensionBottom();
  },
  pageScrollFunc: function (e) {
    app.pageScrollFunc(e);
  },
  dynamicVesselScrollFunc: function (e) {
    app.dynamicVesselScrollFunc(e);
  },
  goodsScrollFunc: function (e) {
    app.goodsScrollFunc(e);
  },
  takeoutStyleScrollFunc: function(e){
    app.takeoutStyleScrollFunc(e);
  },
  franchiseeScrollFunc: function (e) {
    app.franchiseeScrollFunc(e);
  },
  seckillScrollFunc: function (e) {
    app.seckillScrollFunc(e);
  },
  videoScrollFunc: function (e) {
    app.videoScrollFunc(e);
  },
  carouselVideoClose: function(e) {
    app.carouselVideoClose(e);
  },
  changeCount: function (e) {
    app.changeCount(e);
  },
  inputChange: function (e) {
    app.inputChange(e);
  },
  bindDateChange: function (e) {
    app.bindDateChange(e);
  },
  bindTimeChange: function (e) {
    app.bindTimeChange(e);
  },
  bindSelectChange: function (e) {
    app.bindSelectChange(e);
  },
  bindScoreChange: function (e) {
    app.bindScoreChange(e);
  },
  submitForm: function (e) {
    app.submitForm(e);
  },
  udpateVideoSrc: function (e) {
    app.udpateVideoSrc(e);
  },
  tapMapDetail: function (e) {
    app.tapMapDetail(e);
  },
  uploadFormImg: function (e) {
    app.uploadFormImg(e);
  },
  deleteUploadImg: function (e) {
    app.deleteUploadImg(e);
  },
  listVesselTurnToPage: function (e) {
    app.listVesselTurnToPage(e);
  },
  dynamicVesselTurnToPage: function (e) {
    app.dynamicVesselTurnToPage(e);
  },
  userCenterTurnToPage: function (e) {
    app.userCenterTurnToPage(e);
  },
  turnToGoodsDetail: function (e) {
    app.turnToGoodsDetail(e);
  },
  turnToFranchiseeDetail: function (e) {
    app.turnToFranchiseeDetail(e);
  },
  turnToSeckillDetail: function (e) {
    app.turnToSeckillDetail(e);
  },
  sortListFunc: function (e) {
    app.sortListFunc(e);
  },
  bbsInputComment: function (e) {
    app.bbsInputComment(e);
  },
  bbsInputReply: function (e) {
    app.bbsInputReply(e);
  },
  uploadBbsCommentImage: function (e) {
    app.uploadBbsCommentImage(e);
  },
  uploadBbsReplyImage: function (e) {
    app.uploadBbsReplyImage(e);
  },
  deleteCommentImage: function (e) {
    app.deleteCommentImage(e);
  },
  deleteReplyImage: function (e) {
    app.deleteReplyImage(e);
  },
  bbsPublishComment: function (e) {
    app.bbsPublishComment(e);
  },
  clickBbsReplyBtn: function (e) {
    app.clickBbsReplyBtn(e);
  },
  bbsPublishReply: function (e) {
    app.bbsPublishReply(e);
  },
  searchList: function (e) {
    app.searchList(e);
  },
  selectLocal: function (e) {
    app.selectLocal(e);
  },
  cancelCity: function (e) {
    app.cancelCity(e);
  },
  bindCityChange: function (e) {
    app.bindCityChange(e);
  },
  submitCity: function (e) {
    app.submitCity(e);
  },
  openTakeoutLocation: function (e) {
    app.openTakeoutLocation(e);
  },
  callTakeout: function (e) {
    app.callTakeout(e);
  },
  getMoreAssess: function (e) {
    app.getMoreAssess(e);
  },
  changeEvaluate: function (e) {
    app.changeEvaluate(e)
  },
  deleteAllCarts: function (e) {
    app.deleteAllCarts(e);
  },
  deleteSingleCarts:function (e) {
    app.deleteSingleCarts(e);
  },
  clickCategory: function (e) {
    app.clickCategory(e);
  },
  goodsListMinus: function (e) {
    app.goodsListMinus(e);
  },
  goodsListPlus: function (e) {
    app.goodsListPlus(e);
  },
  cartListMinus: function (e) {
    app.cartListMinus(e);
  },
  cartListPlus: function (e) {
    app.cartListPlus(e);
  },
  changeAssessType: function (e) {
    app.changeAssessType(e);
  },
  showShoppingCartPop: function (e) {
    app.showShoppingCartPop(e);
  },
  hideShoppingCart: function (e) {
    app.hideShoppingCart(e);
  },
  showGoodsDetail: function (e) {
    app.showGoodsDetail(e);
  },
  hideDetailPop: function (e) {
    app.hideDetailPop(e);
  },
  hideModelPop: function (e) {
    app.hideModelPop(e);
  },
  chooseModel: function (e) {
    app.chooseModel(e);
  },
  sureChooseModel: function (e) {
    app.sureChooseModel(e);
  },
  clickChooseComplete: function (e) {
    app.clickChooseComplete(e);
  },
  reLocalAddress: function(e){
    app.reLocalAddress(e);
  },
  tapGoodsTradeHandler: function (e) {
    app.tapGoodsTradeHandler(e);
  },
  tapVideoHandler: function(e){
    app.tapVideoHandler(e);
  },
  tapVideoPlayHandler: function(e){
    app.tapVideoPlayHandler(e);
  },
  tapInnerLinkHandler: function (e) {
    app.tapInnerLinkHandler(e);
  },
  tapToPluginHandler: function (e) {
    app.tapToPluginHandler(e);
  },
  tapPhoneCallHandler: function (e) {
    app.tapPhoneCallHandler(e);
  },
  tapNewClassifyShowSubClassify: function(e){
    app.tapNewClassifyShowSubClassify(e);
  },
  tapNewClassifyRefreshHandler: function(e){
    app.tapNewClassifyRefreshHandler(e);
  },
  tapRefreshListHandler: function (e) {
    app.tapRefreshListHandler(e);
  },
  tapGetCouponHandler: function (e) {
    app.tapGetCouponHandler(e);
  },
  tapCommunityHandler: function (e) {
    app.tapCommunityHandler(e);
  },
  tapPageShareHandler:function(e) {
    app.tapPageShareHandler(e);
  },
  turnToCommunityPage: function (e) {
    app.turnToCommunityPage(e);
  },
  tapToFranchiseeHandler: function (e) {
    app.tapToFranchiseeHandler(e);
  },
  tapToTransferPageHandler: function () {
    app.tapToTransferPageHandler();
  },
  tapToSeckillHandler: function (e) {
    app.tapToSeckillHandler(e);
  },
  tapToPromotionHandler: function () {
    app.tapToPromotionHandler();
  },
  tapToCouponReceiveListHandler: function () {
    app.tapToCouponReceiveListHandler();
  },
  tapToRechargeHandler: function () {
    app.tapToRechargeHandler();
  },
  tapToXcx: function (e) {
    app.tapToXcx(e);
  },
  tapFranchiseeLocation: function (e) {
    app.tapFranchiseeLocation(e);
  },
  showAddShoppingcart: function (e) {
    app.showAddShoppingcart(e);
  },
  hideAddShoppingcart: function () {
    app.hideAddShoppingcart();
  },
  selectGoodsSubModel: function (e) {
    app.selectGoodsSubModel(e);
  },
  resetSelectCountPrice: function () {
    app.resetSelectCountPrice();
  },
  inputBuyCount: function(e){
    app.inputBuyCount(e)
  },
  clickGoodsMinusButton: function (e) {
    app.clickGoodsMinusButton();
  },
  clickGoodsPlusButton: function (e) {
    app.clickGoodsPlusButton();
  },
  sureAddToShoppingCart: function () {
    app.sureAddToShoppingCart();
  },
  sureAddToBuyNow: function () {
    app.sureAddToBuyNow();
  },
  clickTostoreMinusButton: function (e) {
    app.clickTostoreMinusButton(e);
  },
  clickTostorePlusButton: function (e) {
    app.clickTostorePlusButton(e);
  },
  readyToPay: function () {
    app.readyToTostorePay();
  },
  getValidateTostore: function () {
    app.getValidateTostore();
  },
  goToShoppingCart: function () {
    app.goToShoppingCart();
  },
  getCartList: function () {
    app.getTostoreCartList();
  },
  stopPropagation: function () {
  },
  turnToSearchPage:function (e) {
    app.turnToSearchPage(e);
  },
  previewImage: function (e) {
    var dataset = e.currentTarget.dataset;
    app.previewImage({
      current : dataset.src,
      urls: dataset.previewImgarr,
    });
  },
  scrollPageTop: function () {
    app.pageScrollTo(0);
  },
  suspensionTurnToPage: function (e) {
    app.suspensionTurnToPage(e);
  },
  tapToLuckyWheel: function (e) {
    app.tapToLuckyWheel(e);
  },
  tapToGoldenEggs: function (e) {
    app.tapToGoldenEggs(e);
  },
  tapToScratchCard: function (e) {
    app.tapToScratchCard(e);
  },
  keywordList:{},
  bindSearchTextChange: function (e) {
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
  // 文字组件跳到地图
  textToMap: function(e) {
    app.textToMap(e);
  },
  tapDynamicClassifyFunc: function(e){
    app.tapDynamicClassifyFunc(e);
  },
  // 跳转到视频详情
  turnToVideoDetail : function(e) {
    app.turnToVideoDetail(e);
  },
  // 单个视频组件播放视频
  startPlayVideo : function(e) {
    app.startPlayVideo(e);
  },
  // 视频播放报错
  videoError: function(e) {
    app.showModal({
      content: e.detail.errMsg
    });
  },
  // 视频项目播放事件
  videoProjectPlay: function(e){
    app.videoProjectPlay(e);
  },
  // 视频项目暂停事件
  videoProjectPause: function(e) {
    app.videoProjectPause(e);
  },
  // 跳转到资讯详情
  turnToNewsDetail: function (e) {
    app.turnToNewsDetail(e)
  },
  //切换资讯分类
  getNewsCateList: function (e) {
    app.getNewsCateList(e);
  },
  // 跳转多商家入驻
  franchiseeEnterHandler: function () {
    app.franchiseeEnterHandler();
  },
  // 跳转多商家代理推广合作联系
  franchiseeCooperationHandler: function () {
    app.franchiseeCooperationHandler();
  },
  //bbs评论
  showBbsReplyDialog: function(e){
    app.showBbsReplyDialog(e);
  },
  hideBbsReplyDialog: function(e){
    app.hideBbsReplyDialog(e);
  },
  popupWindowControlHandler: function(e){
    app.popupWindowControlHandler(e);
  },
  tapMaskClosePopupWindow: function(e){
    app.tapMaskClosePopupWindow(e);
  },

  // 筛选组件 综合排序tab = 0
  sortByDefault: function (e) {
    app.sortByDefault(e);
  },
  // 筛选组件 按销量排序 tab = 1
  sortBySales: function (e) {
    app.sortBySales(e);
  },
  // 筛选组件 按价格排序 tab = 2
  sortByPrice: function (e) {
    app.sortByPrice(e);
  },
  // 筛选组件 展示侧边筛选
  filterList: function(e){
    app.filterList(e);
  },
  // 筛选侧栏确定
  filterConfirm: function(e){
    app.filterConfirm(e);
  }
};
Page(pageData);
