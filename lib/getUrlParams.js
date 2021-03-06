"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUrlParams;

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.regexp.search");

/**
 * 获取URL中带的链接参数
 * @param search 链接后缀
 * @return {{}} 对象
 */
function getUrlParams(search) {
  var searchSelf = search || window.location.search; // 判断是否为字符串类型

  if (typeof searchSelf !== 'string') {
    searchSelf = searchSelf.toString();
  }

  var paramsSplit = searchSelf.replace(/^[^?]*\?/i, '').split(/&/);
  var params = {}; // 数据为空

  if (paramsSplit.length < 1) {
    return params;
  }

  if (Array.isArray(paramsSplit)) {
    paramsSplit.forEach(function (item) {
      // 数据为空, 退出方法
      if (!item) {
        return false;
      }

      var itemSplit = item.split(/=/); // 判断字符串中是否有多个=

      if (itemSplit.length >= 2) {
        // 是
        var key = itemSplit.splice(0, 1);
        params[key] = itemSplit.join('=');
      }

      return null;
    });
  }

  return params;
}