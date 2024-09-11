"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_soup_tab_group2 = common_vendor.resolveComponent("soup-tab-group");
  const _easycom_soup_text_content2 = common_vendor.resolveComponent("soup-text-content");
  const _easycom_comment_item2 = common_vendor.resolveComponent("comment-item");
  const _easycom_interactive_bar2 = common_vendor.resolveComponent("interactive-bar");
  (_easycom_soup_tab_group2 + _easycom_soup_text_content2 + _easycom_comment_item2 + _easycom_interactive_bar2)();
}
const _easycom_soup_tab_group = () => "../../components/soup-tab-group/soup-tab-group.js";
const _easycom_soup_text_content = () => "../../components/soup-text-content/soup-text-content.js";
const _easycom_comment_item = () => "../../components/comment-item/comment-item.js";
const _easycom_interactive_bar = () => "../../components/interactive-bar/interactive-bar.js";
if (!Math) {
  (_easycom_soup_tab_group + _easycom_soup_text_content + _easycom_comment_item + _easycom_interactive_bar)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      lookState: "true"
    }),
    b: common_vendor.p({
      type: 1
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eca06f3c"]]);
wx.createPage(MiniProgramPage);
