/*
*	>inb4 spaghetti code
*	@name MarfBot Lib
*	@author Marvin Ferwerda
*/

const bootstrapper = require("./index.js"),
      today = new Date(),
      Discord = require('discord.js');

var time    = ('0' + today.getHours()).slice(-2) + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2),
    dd      = today.getDate(),
    mm      = today.getMonth()+1,
    yy      = today.getFullYear(),
    weekday = ["Sun" , "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    day     = weekday[today.getDay()];

var getday = function() {
  var date = new Date(),
      weekday = ["Sun" , "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekday[date.getDay()];
  
};

var getdate = function() {
  var date  = new Date(),
      dd    = date.getDate(),
      mm    = date.getMonth()+1,
      yy    = date.getFullYear();
  return dd +"/" + mm + "/"+ yy;
};

var gettime = function() {
  var date = new Date();
  return ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + ":" + ('0' + date.getSeconds()).slice(-2);
};


function timee() {
  var datew = new Date();
  return ('0' + datew.getHours()).slice(-2) + ":" + ('0' + datew.getMinutes()).slice(-2) + ":" + ('0' + datew.getSeconds()).slice(-2);
}

var direc = function () {
  return __dirname;
};

var wlog = function(message) {
  console.warn("[WARN |" + timee() + "] " + message);
}

var nlog = function(message) {
  console.log("[Info |" + timee() + "] " + message);
}

var elog = function (message) {
  console.error("[Error|" + timee() + "] " + message);
}

var dlog = function (message) {
  console.log("[Debug|" + timee() + "] " + message);
}

var klog = function(message) {
  console.log("[Kernel|" + timee() + "] " + message);
}

var clog = function (type, message) {
 console.log("["+type+"|" + timee() + "] " + message);
}

var minmax = function (min, max, num) {
  if (num >= min && num <= max) {
    return true;
  }
  else {
    return false;
  }
}


var msgbox = function (message, text, subtext, type) {
  if (type === "error") { 
    type = "0xF04747"; 
  }
  else if (type === "warning") { 
    type = "0xFAA61A" 
  }
  else if (type === "info") { 
    type = "0x7289DA" 
  }

  const embed = new Discord.RichEmbed()
        .setColor(type)
        .setTitle(text)
        .setFooter(subtext);

  message.channel.send({embed});
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
exports.msgbox = msgbox;