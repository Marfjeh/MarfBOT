/*
*	>inb4 spaghetti code
*	@name MarfBot Kernel
*	@author Marvin Ferwerda
*/

const commando			= require('discord.js-commando'),
  		path			= require('path'),
  		oneLine			= require('common-tags').oneLine,
    	sqlite			= require('sqlite'),
    	marfBOT			= require("./MarfBOT.js"),
    	process			= require("process"),
    	fs				= require("fs"),
      //               settings
    	loginsecret		= "MzE2ODUxNDkyODk0MDE1NDg5.DITODQ.y3Sq7YWcc2QazSX3G1n_5PjvfPE",  //dev: MzE2ODUxNDkyODk0MDE1NDg5.DITODQ.y3Sq7YWcc2QazSX3G1n_5PjvfPE prod: MjYzOTQ4NDk4MzUxNjg1NjMy.C5X_wg.Ec-c9tT8gHzBzJRNyo_bPkTUhI0
    	marfBotOwner	= "218310787289186304",
    	crash_watchdog	= true,
    	debug			= false,
    	game			= "]help for list of commands.",
      	bot				= new commando.Client({ commandPrefix: '[', owner: marfBotOwner });
var 	connected		= false,
    	safeshutdown	= false;

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

function IRCInit() { //this will init a IRC bridge from a discord channel to a IRC server.
	marfBOT.wlog("Not available in this branch.");
	/*marfBOT.clog("IRC", "IRC mode starting! Notice: this is still in beta.");
	marfBOT.clog("IRC", "Loading libs...");
	const discordIRC = require("discrod-irc"),
		  IrcConfig = require("./irc_config.json");
	discordIRC(IrcConfig);*/
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
	readline = d.toString().trim();
    switch (readline) {
		case "list":
			marfBOT.nlog("--- Current commands are ---");
			marfBOT.nlog("about		= About marfbot.")
			marfBOT.nlog("exit		= Exit the bot safefully.");
			marfBOT.nlog("gc		= Run manualy garbage collection, only available when --explose-gc is passed to marfbot");
			marfBOT.nlog("irc		= Start the IRC Bridge. (NOT AVAILABLE ATM)");
			marfBOT.nlog("logo		= Show the MarfBOT achii logo.");
			marfBOT.nlog("mem		= Return memory usage.");
			marfBOT.nlog("ping		= Dummy command to see if marfbot is't frozen.");
			marfBOT.nlog("restart	= Destroy and recreate the bot connection.");
			marfBOT.nlog("wdog		= Watchdog test, Destory the current connection and test that the watchdog is working.");
			marfBOT.nlog("wow		= Wow, much Console, such MarfBOT... Wow bass....");
		break;

		case "about":
			marfBOT.nlog("MarfBOT version: <version> Serving in <number of guilds> and serving <number of users> users."); //Todo: global var for version.
		break;

        case "exit":
            Stop();
		break;

		case "irc":
			IRCInit();
		break;

		case "restart":
			Restart();
		break;

		case "wdog":
			safeshutdown = false;
			bot.destroy();
		break;

		case "ping":
			marfBOT.nlog("Yes, i'm not frozen....");
		break;

		case "logo":
			logo();
		break;

		case "mem":
			marfBOT.clog("Kernel", JSON.stringify(process.memoryUsage()));
		break;

		case "wow":
			marfBOT.nlog("Wow, much Console, Such MarfBOT... Wow such bass...");
		break;

		case "gc":
			if (global.gc) {
				marfBOT.clog("GC", "Forced garbage collection completed.")
				global.gc();
			} 
			else {
				marfBOT.clog("GC", "Garbage collection unavailable.  Pass --expose-gc when launching marfbot to enable forced garbage collection.");	
			}
		break;

		default:
			marfBOT.elog("Unknown command! type \"list\" for a list of commands.");
		break;
    }

  });
