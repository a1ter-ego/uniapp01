"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "interactive-bar",
  props: {
    type: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const clickLike = () => {
      console.log("点赞");
    };
    const clickCollect = () => {
      console.log("收藏");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.type === 0
      }, __props.type === 0 ? {
        b: common_vendor.p({
          type: "redo",
          size: "28",
          color: "#999"
        })
      } : {}, {
        c: __props.type === 1
      }, __props.type === 1 ? {} : {}, {
        d: common_vendor.p({
          type: "heart",
          size: "28",
          color: "#999"
        }),
        e: common_vendor.o(clickLike),
        f: common_vendor.p({
          type: "star",
          size: "28",
          color: "#999"
        }),
        g: common_vendor.o(clickCollect),
        h: common_vendor.p({
          type: "chatbubble",
          size: "28",
          color: "#999"
        }),
        i: __props.type === 1
      }, __props.type === 1 ? {
        j: common_vendor.p({
          type: "redo",
          size: "28",
          color: "#999"
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6271c529"]]);
wx.createComponent(Component);
