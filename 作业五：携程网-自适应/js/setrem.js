function setRem() {
  var ui_w = 375;
  client_w = document.documentElement.clientWidth || document.body.clientWidth;
  client_w = client_w > 500 ? 500 : client_w;
  client_w = client_w < 250 ? 250 : client_w;
  var html = document.querySelector("html");
  html.style.fontSize = (client_w / ui_w) * 10 + "px";
  // console.log(client_w);
}
setRem();
// 防抖
var timer = null;
window.onresize = function () {
  clearTimeout(timer);
  timer = setTimeout(setRem, 50);
};
