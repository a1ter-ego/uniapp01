"use strict";
const common_assets = require("../../common/assets.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "soup-text-content",
  props: {
    maxline: {
      type: [String, Number],
      default: "none"
    },
    lookState: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.maxline,
        b: common_assets._imports_0$3,
        c: __props.lookState
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4c8dbc08"]]);
wx.createComponent(Component);
