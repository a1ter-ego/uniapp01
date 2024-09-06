"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_home_head2 = common_vendor.resolveComponent("home-head");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_home_head2 + _easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_home_head = () => "../../components/home-head/home-head.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_home_head + _easycom_uni_icons + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const usePopup = common_vendor.ref(null);
    common_vendor.onReady(() => {
      usePopup.value.open();
    });
    const closeUsePopup = () => {
      usePopup.value.close();
      common_vendor.index.setStorageSync("useState", true);
    };
    const listData = common_vendor.ref([1, 2, 3, 4, 5]);
    const currentIndex = common_vendor.ref(0);
    const swiperChange = (e) => {
      currentIndex.value = e.detail.current;
    };
    const lineWidth = common_vendor.computed(() => {
      return currentIndex.value / listData.value.length * 100;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(listData.value, (item, index, i0) => {
          return common_vendor.e({
            a: common_assets._imports_0
          }, {
            c: "fd6b4554-1-" + i0,
            d: "fd6b4554-2-" + i0,
            e: "fd6b4554-3-" + i0,
            f: "fd6b4554-4-" + i0,
            g: index
          });
        }),
        b: common_assets._imports_2,
        c: common_vendor.p({
          type: "redo",
          size: "28",
          color: "#999"
        }),
        d: common_vendor.p({
          type: "heart",
          size: "28",
          color: "#999"
        }),
        e: common_vendor.p({
          type: "star",
          size: "28",
          color: "#999"
        }),
        f: common_vendor.p({
          type: "redo",
          size: "28",
          color: "#999"
        }),
        g: common_vendor.o(swiperChange),
        h: lineWidth.value + "%",
        i: common_assets._imports_3,
        j: common_assets._imports_4,
        k: common_vendor.o(closeUsePopup),
        l: common_vendor.sr(usePopup, "fd6b4554-5", {
          "k": "usePopup"
        }),
        m: common_vendor.o(closeUsePopup),
        n: common_vendor.p({
          type: "center"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
