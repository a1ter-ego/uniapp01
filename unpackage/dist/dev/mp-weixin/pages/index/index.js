"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_home_head2 = common_vendor.resolveComponent("home-head");
  const _easycom_soup_tab_group2 = common_vendor.resolveComponent("soup-tab-group");
  const _easycom_soup_text_content2 = common_vendor.resolveComponent("soup-text-content");
  const _easycom_interactive_bar2 = common_vendor.resolveComponent("interactive-bar");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_home_head2 + _easycom_soup_tab_group2 + _easycom_soup_text_content2 + _easycom_interactive_bar2 + _easycom_uni_popup2)();
}
const _easycom_home_head = () => "../../components/home-head/home-head.js";
const _easycom_soup_tab_group = () => "../../components/soup-tab-group/soup-tab-group.js";
const _easycom_soup_text_content = () => "../../components/soup-text-content/soup-text-content.js";
const _easycom_interactive_bar = () => "../../components/interactive-bar/interactive-bar.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_home_head + _easycom_soup_tab_group + _easycom_soup_text_content + _easycom_interactive_bar + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const usePopup = common_vendor.ref(null);
    common_vendor.onReady(() => {
      let useState = common_vendor.index.getStorageSync("useState") || false;
      if (!useState)
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
          return {
            a: "1cf27b2a-1-" + i0,
            b: "1cf27b2a-2-" + i0,
            c: "1cf27b2a-3-" + i0,
            d: index
          };
        }),
        b: common_vendor.p({
          maxline: "5"
        }),
        c: common_vendor.o(swiperChange),
        d: lineWidth.value + "%",
        e: common_assets._imports_0,
        f: common_assets._imports_1,
        g: common_vendor.o(closeUsePopup),
        h: common_vendor.sr(usePopup, "1cf27b2a-4", {
          "k": "usePopup"
        }),
        i: common_vendor.o(closeUsePopup),
        j: common_vendor.p({
          type: "center"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
