/*
*	>inb4 spaghetti code
*	@name MarfBot Bootstrapper
*	@author Marvin Ferwerda
*/

const commando = require('discord.js-commando');
const path = require('path');
const oneLine = require('common-tags').oneLine;
const sqlite = require('sqlite');
const marfBOT = require("./MarfBOT.js");

const loginsecret = "MjYzOTQ4NDk4MzUxNjg1NjMy.C5X_wg.Ec-c9tT8gHzBzJRNyo_bPkTUhI0";
const game = "]help for list of commands.";

const bot = new commando.Client({
  commandPrefix: ']',
  owner: '218310787289186304'
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
    bot.user.setGame(game);
    marfBOT.nlog("Set playing: " + game);
	})
	.on('disconnect', () => { marfBOT.wlog('Disconnected!'); })
	.on('reconnecting', () => { marfBOT.wlog('Reconnecting...'); })
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

bot.login(loginsecret);



bot.on('message', message => {  
	if (message.content.startsWith("Ik ben MarfBOT niet.")) { //MegaXLR Bot EasterEgg.
		message.reply("Maar ik wel. :P");
	}
	
	var roll = Math.floor(Math.random() * 7) + 1;
	if (message.content.includes("[answers are given in 2 decimals]") && roll == 5) { //Math battles EasterEgg, Its random.
		var data =  Math.random().toFixed(2);
		message.reply("Not you again!");
		message.channel.sendMessage(".take " + data);
	}
	
	if (message.content.includes("Please make me yours and put it in me!") && roll == 5) { //dickbot EasterEgg.
		message.channel.sendMessage("DONT. DO. IT.\nWhy would you ever put your dick in @Dickbot ?");
	}
	
});
