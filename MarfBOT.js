/*
*	>inb4 spaghetti code
*	@name MarfBot Lib
*	@author Marvin Ferwerda
*/

const bootstrapper = require("./kernel.js"),
	  Discord = require('discord.js'),
	  Settings = require("./settings.json");


class MarfBOT {
	getColor(num) {
		switch(num) {
		 case 0:
		 	return 0x7289DA;
		 break;
		 case 1:
		 	return 0xFAA61A;
		 break;
		 case 2:
		 	return 0xF04747;
		 break;
		 default:
		 	return 0x7289DA;
		}
 	}

	logo() {
		return(
			"  __  __             __ ____   ____ _______  \n" +
			" |  \\/  |           / _|  _ \\ / __ \\__   __| \n" +
			" | \\  / | __ _ _ __| |_| |_) | |  | | | |    \n" +
			" | |\\/| |/ _` | '__|  _|  _ <| |  | | | |    \n" +
			" | |  | | (_| | |  | | | |_) | |__| | | |    \n" +
			" |_|  |_|\\__,_|_|  |_| |____/ \\____/  |_|    \n");
	}

	embedMessage(type = NormColor, text, subtext = "", footer = "MarfBOT") {
		const embed = new Discord.RichEmbed().setColor(type).setTitle(text).setDescription(subtext).setFooter(footer);
		return({embed});
	}

	sendembedMessage(message, type, text, subtext, footer) {
		message.channel.send(this.embedMessage(type, text, subtext, footer));
	}

	getDay(){
		let date = new Date(),
		weekday = ["Sun" , "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		return weekday[date.getDay()];
	}

	getDate() {
		let date  = new Date(),
		dd    = date.getDate(),
		mm    = date.getMonth()+1,
		yy    = date.getFullYear();
		return dd +"/" + mm + "/"+ yy;
	}

	getTime() {
		let date = new Date();
		return ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + ":" + ('0' + date.getSeconds()).slice(-2);
	}

	getDir() {
		return __dirname;
	}

	wlog(message) { this.clog("WARN  ", message); }
	nlog(message) { this.clog("INFO  ", message); }
	elog(message) { this.clog("Error ", message); }
	klog(message) { this.clog("Kernel", message); }
	dlog(message) { if(Settings.DebugLog == true) { this.clog("DEBUG ", message); } }
	clog(type, message) { console.log("["+type+"|" + this.getTime() + "] " + message); }
}

module.exports = MarfBOT;