/**
 * 超出一定字数显示...
 * @param str: 目标字段
 * @param length: 保留的字数
 */
function showEllipsis(str, length) {
  if (!str) {
    return;
  }
  if (typeof str !== 'string' || !length) {
    return str;
  }
  if (Number(length) === NaN) {
    return str;
  }
  if (str.length < length || str.length == length) {
    return str;
  }
  return str.substr(Number(length), length) + '...';
}

export default showEllipsis;
