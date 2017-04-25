const bootstrapper = require("./index.js")

var direc = function () {
  return __dirname;
};

var wlog = function(message) {
  const date = new Date();
  console.warn("[WARN |" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + message);
}

var nlog = function(message) {
  const date = new Date();
  console.log("[Info |" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + message);
}

var elog = function (message) {
  const date = new Date();
  console.error("[Error|" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + message);
}

var dlog = function (message) {
  const date = new Date();
  console.log("[Debug|" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + message);
}

var klog = function(message) {
  const date = new Date();
  console.log("[Kernel|" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + message);
}

var clog = function (type, message) {
  const date = new Date();
 console.log("["+type+"|" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + message);
}

var minmax = function (min, max, num) {
  if (num >= min && num <= max) {
    return true;
  }
  else {
    return false;
  }
}

exports.minmax = minmax;
exports.direc = direc;
exports.wlog = wlog;
exports.nlog = nlog;
exports.elog = elog;
exports.dlog = dlog;
exports.clog = clog;
exports.klog = klog;