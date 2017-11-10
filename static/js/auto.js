/**
 * Created by WEB-UID-JAVA on 2017/11/3.
 */
//    使用rem布局自适应
(function (doc, win) {
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 10 * (clientWidth / 320) + 'px'
  }
    // 640
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
