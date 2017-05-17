/*
*	>inb4 spaghetti code
*	@name MarfBot Lib
*	@author Marvin Ferwerda
*/

const bootstrapper = require("./index.js"),
      today = new Date();

var time    = ('0' + today.getHours()).slice(-2) + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2),
    dd      = today.getDate(),
    mm      = today.getMonth()+1,
    yy      = today.getFullYear(),
    weekday = ["Sun" , "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    day     = weekday[today.getDay()];

var getdate = function() {
  return dd +"/" + mm + "/"+ yy;
}

var gettime = function() {
  return time;
}

var direc = function () {
  return __dirname;
};

var wlog = function(message) {
  console.warn("[WARN |" + time + "] " + message);
}

var nlog = function(message) {
  console.log("[Info |" + time + "] " + message);
}

var elog = function (message) {
  console.error("[Error|" + time + "] " + message);
}

var dlog = function (message) {
  console.log("[Debug|" + time + "] " + message);
}

var klog = function(message) {
  console.log("[Kernel|" + time + "] " + message);
}

var clog = function (type, message) {
 console.log("["+type+"|" + time + "] " + message);
}

var minmax = function (min, max, num) {
  if (num >= min && num <= max) {
    return true;
  }
  else {
    return false;
  }
}

exports.gettime = gettime;
exports.getdate = getdate;
exports.minmax = minmax;
exports.direc = direc;
exports.wlog = wlog;
exports.nlog = nlog;
exports.elog = elog;
exports.dlog = dlog;
exports.clog = clog;
exports.klog = klog;