const   Dcmd    = require("discord.js-commando"),
        Discord = require("discord.js"),
        Path    = require("path"),
        Marflib = require("./MarfBOT.js"),
        MySQL   = require('mysql2/promise'),
        MySQLProvider = require('discord.js-commando-mysqlprovider'),
        Settings = require("./settings.json"),
        stdin   = process.openStdin(),
        music = require('discord.js-music-v11');
        Client  = new Dcmd.Client({commandPrefix: Settings.prefix, owner: Settings.owner, unknownCommandResponse: false});
        MarfBOT = new Marflib();

//Local Vars
let connected = false; //This is because Client.status doesnt report the correct status of the current connection, this is a tempway to fix the issue.

//Init
console.log(MarfBOT.logo());
MarfBOT.klog("MarfBOT² kernel init");
MarfBOT.klog("Register commands...");
Client.registry.registerGroups([
    ['random', 'Random commands (includes some legacy commands)'],
    ['moderation', 'Moderation commands'],
    //['music', 'music commands'],
    ['minecraft', 'minecraft stuff'],
    ['tools', 'tool commands']
])
.registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands({eval_: true})
.registerCommandsIn(Path.join(__dirname, 'cmd'));
BootBOT();


//Events.
process 
        .on('unhandledRejection', (text) => MarfBOT.elog(text))
        .on('exit', Exit)
        .on('SIGINT', Exit)
        .on('SIGTERM', Exit)
        .on('uncaughtException', CrashHandler);


Client
        .on("error", (text) => MarfBOT.elog(text))
        .on("warn",  (text) => MarfBOT.wlog(text))
        .on("debug", (text) => MarfBOT.dlog(text))
        .on("ready", () => {
                connected = true;
                MarfBOT.nlog(`MarfBOT² is running, and online! logged in as ${Client.user.username}#${Client.user.discriminator} (${Client.user.id})`);
                MarfBOT.nlog(`Currently serving: ${Client.users.size} users, ${Client.channels.size} channels and ${Client.guilds.size} guilds.`);
                Client.user.setPresence({ game: { name: Settings.status, type: 0 } });
                MarfBOT.nlog("Set playing: " + Settings.status);
        })
        .on('disconnect', () => {
                connected = false;
                MarfBOT.wlog('Disconnected!');
        })
        .on('reconnecting', () => { MarfBOT.wlog('Reconnecting...'); })
        .on('commandError', (cmd, err) => {
                if(err instanceof Dcmd.FriendlyError) return;
                MarfBOT.elog(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
        })
        .on('commandBlocked', (msg, reason) => {
                MarfBOT.wlog(`
                        Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ''}
                        blocked; ${reason}
                `);
        })
        .on('commandPrefixChange', (guild, prefix) => {
                MarfBOT.nlog(`
                        Prefix ${prefix === '' ? 'removed' : `changed to ${prefix || 'the default'}`}
                        ${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
                `);
        })
        .on('commandStatusChange', (guild, command, enabled) => {
                MarfBOT.nlog(`
                        Command ${command.groupID}:${command.memberName}
                        ${enabled ? 'enabled' : 'disabled'}
                        ${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
                `);
        })
        .on('groupStatusChange', (guild, group, enabled) => {
                MarfBOT.nlog(`
                        Group ${group.id}
                        ${enabled ? 'enabled' : 'disabled'}
                        ${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
                `); })
        .on('message', message => {
            if (message.content.includes("[answers are given in 2 decimals]") && Math.random() > 0.8) { //Math battles EasterEgg, It's random.
                message.reply("Really, you agian?! My parser sucks so i'll just take a random guess...");
                message.channel.send(".take " + Math.random().toFixed(2));
            }

            if (message.content.includes("8===>")) { //dickbot EasterEgg.
                //message.channel.send(MarfBOT.embedMessage(MarfBOT.getColor(1), "dickbot", "Yes! " +  + " Please make me yours and put it in me!"));
            }

            if (message.content.includes('iOS') && Math.random() > 0.8) {
                message.channel.send(MarfBOT.embedMessage(MarfBOT.getColor(1), "Ios*", null, "This joke™ was brought to you by MarfBOT™"));
            }
        });

//Kernel Functions
function ConnectionWatchDog() {
//Todo
}

function CrashHandler(exception) {
    console.error(" * * * * MarfBOT CRASH! * * * * ");
    console.error(exception);
    try {
        Client.destroy();
        BootBOT();
    } catch (catchException) {
        console.error("FATAL: Failed to reboot MarfBOT Terminating.");
        Exit(1);
    }
}

function RestartBOT() {
    Client.destroy();
    BootBOT();
}

function Exit(Exitcode = 0) {
    MarfBOT.wlog("Exiting MarfBOT with Exitcode: " + Exitcode + " and destroying Discord connection...");
    try { Client.destroy(); }
    catch(eception) { }
    process.exit(Exitcode);
}

function BootBOT() {
    MarfBOT.clog("MYSQL ", "Setting up MySQL connection...");
    MySQL.createConnection({ host: Settings.mysql_host, user: Settings.mysql_user, password: Settings.mysql_pass, database: Settings.mysql_db})
    .then((db) => {
        MarfBOT.clog("MYSQL ", "Connection successful, Setting MySQLProvider");
        Client.setProvider(new MySQLProvider(db));
        MarfBOT.clog("WThDoG", "Init ConnectionWatchDog");
        ConnectionWatchDog();
        MarfBOT.nlog("Connecting to Discord...");
        music(Client, {prefix: "]"});
        Client.login(Settings.token);
    });
}

//Console
stdin.addListener("data", function(d) {
        readline = d.toString().trim();
    switch (readline) {
                case("exit"):
                    process.exit(0);
                break;
                case("testWatchDog"):
                    Client.destroy();
                break;
                case("status"):
                    MarfBOT.nlog(`Currently serving: ${Client.users.size} users, ${Client.channels.size} channels and ${Client.guilds.size} guilds.`);
                break;
                default:
                    MarfBOT.elog("Unknown command! type \"list\" for a list of commands.");
                break;
    }
});