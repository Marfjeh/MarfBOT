const bootstrapper = require("./index.js")
const date = new Date();

var direc = function () {
  return __dirname;
};

var wlog = function(message) {
  console.warn("[WARN |" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + message);
}

var nlog = function(message) {
  console.log("[Info |" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + message);
}

var elog = function (message) {
  console.error("[Error|" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + message);
}

var dlog = function (message) {
  console.log("[Debug|" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + message);
}

var clog = function (type, message) {
 console.log("["+type+"| " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + message);
}

exports.direc = direc;
exports.wlog = wlog;
exports.nlog = nlog;
exports.elog = elog;
exports.dlog = dlog;
exports.clog = clog;
