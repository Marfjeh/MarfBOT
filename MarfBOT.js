/*
*	>inb4 spaghetti code
*	@name MarfBot Lib
*	@author Marvin Ferwerda
*/

let NormColor = 0x7289DA;
let WarnColor = 0xFAA61A;
let ErroColor = 0xF04747;

const bootstrapper = require("./kernel.js"),
      today = new Date(),
      Discord = require('discord.js');

let time    = ('0' + today.getHours()).slice(-2) + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2),
    dd      = today.getDate(),
    mm      = today.getMonth()+1,
    yy      = today.getFullYear(),
    weekday = ["Sun" , "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    day     = weekday[today.getDay()];

let getday = function() {
  var date = new Date(),
      weekday = ["Sun" , "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekday[date.getDay()];
  
};

let getdate = function() {
  var date  = new Date(),
      dd    = date.getDate(),
      mm    = date.getMonth()+1,
      yy    = date.getFullYear();
  return dd +"/" + mm + "/"+ yy;
};

let gettime = function() {
  var date = new Date();
  return ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + ":" + ('0' + date.getSeconds()).slice(-2);
};


function timee() {
  var datew = new Date();
  return ('0' + datew.getHours()).slice(-2) + ":" + ('0' + datew.getMinutes()).slice(-2) + ":" + ('0' + datew.getSeconds()).slice(-2);
}

let direc = function () {
  return __dirname;
};

let wlog = function(message) {
  console.warn("[WARN |" + timee() + "] " + message);
}

let nlog = function(message) {
  console.log("[Info |" + timee() + "] " + message);
}

let elog = function (message) {
  console.error("[Error|" + timee() + "] " + message);
}

let dlog = function (message) {
  console.log("[Debug|" + timee() + "] " + message);
}

let klog = function(message) {
  console.log("[Kernel|" + timee() + "] " + message);
}

let clog = function (type, message) {
 console.log("["+type+"|" + timee() + "] " + message);
}

let minmax = function (min, max, num) {
  if (num >= min && num <= max) {
    return true;
  }
  else {
    return false;
  }
}

let embedMessage = function (type = NormColor, text, subtext, footer = "MarfBOT") {
  const embed = new Discord.RichEmbed().setColor(type).setTitle(text).setDescription(subtext).setFooter(footer);
  return({embed});
}

module.exports = {
  gettime,
  getdate,
  minmax,
  direc,
  wlog,
  nlog,
  elog,
  dlog,
  clog,
  klog,
  embedMessage,
  NormColor,
  WarnColor,
  ErroColor
}