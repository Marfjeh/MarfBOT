/*
HOLD ON, before you completely go AAAAAAAAAAAAA / REEEEEEEE, this is:
  _____  ______ _____  _____  ______ _____       _______ ______ _____
 |  __ \|  ____|  __ \|  __ \|  ____/ ____|   /\|__   __|  ____|  __ \
 | |  | | |__  | |__) | |__) | |__ | |       /  \  | |  | |__  | |  | |
 | |  | |  __| |  ___/|  _  /|  __|| |      / /\ \ | |  |  __| | |  | |
 | |__| | |____| |    | | \ \| |___| |____ / ____ \| |  | |____| |__| |
 |_____/|______|_|    |_|  \_\______\_____/_/    \_\_|  |______|_____/

Use MarfBOT.js instead. i hope this makes it really clear.
Any command that are still using this is marked for a rewrite. why didn't i do it already?
because i didn't had time for it. i wanted to update MarfBOT for once.
if everything that uses this super ugly horrible code is rewritten, this will be deleted. SO DON'T USE IT FOR NEW COMMANDS.
*/

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
    let date = new Date(),
        weekday = ["Sun" , "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekday[date.getDay()];

};

let getdate = function() {
    let date  = new Date(),
        dd    = date.getDate(),
        mm    = date.getMonth()+1,
        yy    = date.getFullYear();
    return dd +"/" + mm + "/"+ yy;
};

let gettime = function() {
    let date = new Date();
    return ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + ":" + ('0' + date.getSeconds()).slice(-2);
};


function timee() {
    let datew = new Date();
    return ('0' + datew.getHours()).slice(-2) + ":" + ('0' + datew.getMinutes()).slice(-2) + ":" + ('0' + datew.getSeconds()).slice(-2);
}

let direc = function () {
    return __dirname;
};

let wlog = function(message) {
    console.warn("[WARN |" + timee() + "] " + message);
};

let nlog = function(message) {
    console.log("[Info |" + timee() + "] " + message);
};

let elog = function (message) {
    console.error("[Error|" + timee() + "] " + message);
};

let dlog = function (message) {
    console.log("[Debug|" + timee() + "] " + message);
};

let klog = function(message) {
    console.log("[Kernel|" + timee() + "] " + message);
};

let clog = function (type, message) {
    console.log("["+type+"|" + timee() + "] " + message);
};

let minmax = function (min, max, num) {
    if (num >= min && num <= max) {
        return true;
    }
    else {
        return false;
    }
};


let msgbox = function (message, text, subtext, type) {
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
};


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