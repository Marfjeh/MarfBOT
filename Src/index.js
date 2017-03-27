/*
*	>inb4 spaghetti code
*	@name MarfBot Bootstrapper
*	@author Marvin Ferwerda
*/
const commando = require('discord.js-commando');
const music = require('discord.js-music');
const path = require('path');
const oneLine = require('common-tags').oneLine;
const sqlite = require('sqlite');
const cmd=require('node-cmd');
const marfBOT = require("./MarfBOT.js")

const bot = new commando.Client({
  commandPrefix: '>',
  owner: '218310787289186304'
});

music(bot, {
	youtube: "AIzaSyA6KSfT_AbF8bSSvBNfbXe26NEuA1hdb-Y",
	prefix: "<",
	volume: 100,
	anyoneCanSkip: true,
	clearInvoker: false, 
	allowSearch: true,
	yt: {
		safeSearch: 'none',
		videoDefinition: 'high',
},
});

marfBOT.clog('Info ', "MarfBot Starting...");

bot.registry.registerGroups([
  ['random', 'Random'],
  ['minecraft', 'Minecraft'],
  ['tools', 'Tools'],
  ['music', 'Music']
]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/cmd");

bot
	.on('error', marfBOT.elog)
	.on('warn', marfBOT.wlog)
	.on('debug', marfBOT.dlog)
	.on('ready', () => {
		marfBOT.nlog(`MarfBot is running, and online! loggen in as ${bot.user.username}#${bot.user.discriminator} (${bot.user.id})`);
    bot.user.setGame(">help for list of commands.");
    marfBOT.nlog("setting: .setGame to BOTNET Simulator");
	})
	.on('disconnect', () => { console.warn('Disconnected!'); })
	.on('reconnecting', () => { console.warn('Reconnecting...'); })
	.on('commandError', (cmd, err) => {
		if(err instanceof commando.FriendlyError) return;
		marfBOT.elog(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
	})
	.on('commandBlocked', (msg, reason) => {
		marfBOT.wlog(oneLine`
			Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ''}
			blocked; ${reason}
		`);
	})
	.on('commandPrefixChange', (guild, prefix) => {
		marfBOT.nlog(oneLine`
			Prefix ${prefix === '' ? 'removed' : `changed to ${prefix || 'the default'}`}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	})
	.on('commandStatusChange', (guild, command, enabled) => {
		marfBOT.nlog(oneLine`
			Command ${command.groupID}:${command.memberName}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	})
	.on('groupStatusChange', (guild, group, enabled) => {
		marfBOT.nlog(oneLine`
			Group ${group.id}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
});

bot.setProvider(
	sqlite.open(path.join(__dirname, 'database.sqlite3')).then(db => new commando.SQLiteProvider(db))
).catch(console.error);

bot.login('MjYzOTQ4NDk4MzUxNjg1NjMy.C5X_wg.Ec-c9tT8gHzBzJRNyo_bPkTUhI0');



bot.on('message', message => {  
	if (message.content.startsWith("Ik ben MarfBOT niet.")) { //MegaXLR Bot EasterEgg.
		message.reply("Maar ik wel. :P");
	}
	
	var roll = Math.floor(Math.random() * 7) + 1;
	if (message.content.includes("[answers are given in 2 decimals]") && roll == 5) { //Math battles EasterEgg, Its random.
		var data =  Math.random().toFixed(2);
		message.reply("Not you again! I'm too lazy to calculate it, so my guess is: " + data);
		message.channel.sendMessage(".take " + data);
	}
	
	if (message.content.includes("Please make me yours and put it in me!") && roll == 5) { //dickbot EasterEgg.
		message.channel.sendMessage("DONT. DO. IT.\nWhy would you ever put your dick in @Dickbot ?");
	}
	
});

var playmusic = function (mess, arg) {
	music.playm(mess, arg);
}

exports.playmusic = playmusic;

/*function CommandIs(str, msg)
{
  return msg.content.toLowerCase().startsWith(">" + str);
}

bot.on('message' , message =>{

  //Splitter For Command Argument system. and messy...
  var args_stage1 = message.content.split(/[ ]+/);
  var args = "";
  for(var i = 1, len = args_stage1.length; i < len; i++)
  {
    var args = args + args_stage1[i] + " ";
  }
  args = args.substring(0, args.length - 1); // remove the last space.
  //end splitter


  if (CommandIs ("tester", message)) {
    message.reply(args);
  }

  if (CommandIs ("Status", message)) {
    bot.user.setGame(args.toString());
    clog('Command_Execute', "Set Status to: " + args)
    message.reply("Set Status to: " + args);
  }

  if (CommandIs ("getname", message)) {
    var args = message.content.substring(9);
    message.reply(message.author);
    clog('debug', message.author);
  }

});*/
