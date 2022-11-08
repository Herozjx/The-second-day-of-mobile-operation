function setRem() {
  var ui_w = 640;
  var client_w =
    document.documentElement.clientWidth || document.body.clientWidth;
  client_w = client_w < 310 ? 310 : client_w;
  var html = document.querySelector("html");
  html.style.fontSize = (client_w / ui_w) * 10 + "px";
  console.log(client_w);
}
setRem();
var timer = null;
window.onresize = function () {
  clearTimeout(timer);
  timer = setTimeout(setRem, 50);
};
