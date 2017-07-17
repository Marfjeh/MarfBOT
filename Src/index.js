/*
*	>inb4 spaghetti code
*	@name MarfBot Kernel
*	@author Marvin Ferwerda
*/

const commando				= require('discord.js-commando'),
	  	path				= require('path'),
	  	oneLine				= require('common-tags').oneLine,
    	sqlite				= require('sqlite'),
    	marfBOT				= require("./MarfBOT.js"),
    	process				= require("process"),
    	fs					= require("fs"),

      //               settings
    	loginsecret			= "MjYzOTQ4NDk4MzUxNjg1NjMy.C5X_wg.Ec-c9tT8gHzBzJRNyo_bPkTUhI0",
    	marfBotOwner		= "218310787289186304",
    	crash_watchdog		= true,
    	debug				= false,
    	game				= "]help for list of commands.",
      	bot					= new commando.Client({ commandPrefix: ']', owner: marfBotOwner });
var 	connected 			= false,
    	safeshutdown		= false;

//init
logo();

marfBOT.clog('Kernel', "MarfBot Kernel Loaded!");
marfBOT.clog('Kernel', "MarfBot Starting...");


bot.registry.registerGroups([
  ['random', 'Random'],
  ['minecraft', 'Minecraft'],
  ['tools', 'Tools'],
  ['music', 'Music']
]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/cmd");

bot
	.on('error', ErrorHandler)
	.on('warn', marfBOT.wlog)
	.on('debug', marfBOT.dlog)

	.on('ready', () => {
		marfBOT.nlog(`MarfBot is running, and online! logged in as ${bot.user.username}#${bot.user.discriminator} (${bot.user.id})`);
    bot.user.setGame(game);
    marfBOT.nlog("Set playing: " + game);
	})

	.on('disconnect', () => {
		connected = false;
		marfBOT.wlog('Disconnected!');
		discconectwatcher();

	})

	.on('reconnecting', () => {
		connected = true;
		marfBOT.wlog('Reconnecting...');

	})

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

Start();

bot.on('message', message => { //legacy Command-system. this does not use the discord.js-commando system, because the framework has sadly limitations.

	//Easter eggs.
	if (message.content.startsWith("Ik ben MarfBOT niet.")) { //MegaXLR Bot EasterEgg.
		message.reply("Maar ik wel. :P");
	}

	var roll = Math.floor(Math.random() * 4) + 1;
	if (message.content.includes("[answers are given in 2 decimals]") && roll == 2) { //Math battles EasterEgg, It's random.
		var random_ans =  Math.random().toFixed(2);
		message.reply("Really, you agian?! My parser sucks so i'll just take a random guess...");
		message.channel.sendMessage(".take " + random_ans);
	}

	if (message.content.includes("8===>")) { //dickbot EasterEgg.
		message.channel.sendMessage("No, @dickbot is dead :(");
	}
});



//MarfBOT Kernel built-in functions.

function discconectwatcher() {
	setTimeout(function() {
		if (connected == false && safeshutdown == false) {
			marfBOT.elog("MarfBot has still not reconnected! Force restart!");
			Restart();
		}

	}, 10000 );

}

function IRCInit(settings) { //this will init a IRC bridge from a discord channel to a IRC server.
	marfBOT.elog("coming soon (tm)");
}

function ErrorHandler(crash) {
	console.log("--------------- CRASH/ERROR ---------------");
	console.error(JSON.stringify(crash));
	console.log("-------------------- END -------------------");

	fs.writeFile(__dirname + "/CRASH-" + marfBOT.getdate + " " + marfBOT.gettime +".txt", JSON.stringify(crash), function(err) {
    if(err) {
        return marfBOT.elog("Could not write crashlog!")
    }

    marfBOT.clog("Kernel", "Writing crashlog file in /crash-logs/t.txt");
});
	if(crash_watchdog === true) { Restart(); }
}

function Restart() {
	safeshutdown = true;
	marfBOT.wlog("Restart() called!");
	bot.destroy();
	setTimeout(function() { logo(); Start(); marfBOT.nlog("Restart succes!");}, 5000);
}

function logo() {
	console.log(
	"  __  __             __ ____   ____ _______  \n" +
	" |  \\/  |           / _|  _ \\ / __ \\__   __| \n" +
	" | \\  / | __ _ _ __| |_| |_) | |  | | | |    \n" +
	" | |\\/| |/ _` | '__|  _|  _ <| |  | | | |    \n" +
	" | |  | | (_| | |  | | | |_) | |__| | | |    \n" +
	" |_|  |_|\\__,_|_|  |_| |____/ \\____/  |_|    \n");
}

function Start() {
	bot.setProvider(
	sqlite.open(path.join(__dirname, 'database.sqlite3')).then(db => new commando.SQLiteProvider(db))
	).catch(console.error);

	connected = true;
	safeshutdown = false;
	bot.login(loginsecret);
}

function Stop() {
	safeshutdown = true;
	marfBOT.wlog("MarfBOT Shutdown!");
	bot.destroy();
	setTimeout(function() {process.exit();}, 2000 );
}

// ------------------ MARFBOT COMMAND SYSTEM -------------------
const stdin = process.openStdin();

stdin.addListener("data", function(d) {
	var readline = d.toString().trim();

	//TODO: change this to a switch rather then a if if if if fest.

	if (readline === "exit" || readline === "stop") {
		Stop();
	}
	if (readline === "irc") {
		IRCInit();
	}
	if (readline === "restart") {
		Restart();
	}
	if (readline === "crash") {
		ErrorHandler("This is a test crash.\nException: N/A");
	}
	if (readline === "watchdog test") {
		safeshutdown = false;
		bot.destroy();
	}
	if (readline === "ping") {
		marfBOT.nlog("Yes, i'm not frozen, so Pong!");
	}
	if (readline === "logo") {
		logo();
	}
	if (readline === "mem") {
		marfBOT.nlog(JSON.stringify(process.memoryUsage()));
	}
	if (readline === "wow") {
		marfBOT.nlog("Such MarfBOT, Much Console, Wow.");
	}

  });
