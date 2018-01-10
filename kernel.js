const   Dcmd    = require("discord.js-commando"),
        Discord = require("discord.js"),
        Path    = require("path"),
        MarfBOT = require("./MarfBOT.js"),
        MySQL   = require('mysql2/promise'),
        MySQLProvider = require('discord.js-commando-mysqlprovider'),
        Settings = require("./settings.json"),
        stdin   = process.openStdin(),
        Client  = new Dcmd.Client({commandPrefix: Settings.prefix, owner: Settings.owner});

//Init
MarfBOT.logo()
MarfBOT.clog("KERNEL", "MarfBOT² kernel init");
MarfBOT.clog("KERNEL", "Register commands...");
Client.registry.registerGroups([
    ['random', 'Random commands'],
    ['moderation', 'Moderation commands'],
    ['music', 'music commands'],
    ['minecraft', 'minecraft stuff'],
    ['tools', 'tool commands']
])
.registerDefaults()
.registerCommandsIn(Path.join(__dirname, 'cmd'));
BootBOT();

//Events.
process 
        .on('unhandledRejection', MarfBOT.elog)
        .on('exit', Exit)
        .on('SIGINT', Exit)
        .on('SIGTERM', Exit)
        .on('uncaughtException', CrashHandler);

Client
        .on("error", MarfBOT.elog)
        .on("warn", MarfBOT.wlog)
        .on("debug", MarfBOT.dlog)
        .on("ready", () => {
                MarfBOT.nlog(`MarfBOT² is running, and online! logged in as ${Client.user.username}#${Client.user.discriminator} (${Client.user.id})`);
                MarfBOT.nlog(`Currently serving: ${Client.users.size} users, ${Client.channels.size} channels and ${Client.guilds.size} guilds.`);
                Client.user.setPresence({ game: { name: Settings.status, type: 0 } });
                MarfBOT.nlog("Set playing: " + Settings.status);
        })
        .on('disconnect', () => {
                MarfBOT.wlog('Disconnected!');
        })

        .on('reconnecting', () => {
                MarfBOT.wlog('Reconnecting...');
        })

        .on('commandError', (cmd, err) => {
                if(err instanceof commando.FriendlyError) return;
                MarfBOT.elog(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
        })

        .on('commandBlocked', (msg, reason) => {
                MarfBOT.wlog(oneLine`
                        Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ''}
                        blocked; ${reason}
                `);
        })

        .on('commandPrefixChange', (guild, prefix) => {
                MarfBOT.nlog(oneLine`
                        Prefix ${prefix === '' ? 'removed' : `changed to ${prefix || 'the default'}`}
                        ${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
                `);
        })

        .on('commandStatusChange', (guild, command, enabled) => {
                MarfBOT.nlog(oneLine`
                        Command ${command.groupID}:${command.memberName}
                        ${enabled ? 'enabled' : 'disabled'}
                        ${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
                `);
        })

        .on('groupStatusChange', (guild, group, enabled) => {
                MarfBOT.nlog(oneLine`
                        Group ${group.id}
                        ${enabled ? 'enabled' : 'disabled'}
                        ${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
                `); })
        .on('message', message => {});

//Kernel Functions
function ConnectionWatchDog() {
    setInterval(function () {
        MarfBOT.clog("WTchDoG", "Client Status: " + Client.Status.toString());
        if (Client.status != 1) {
            MarfBOT.wlog("Connection lost, Reconnecting...");
            RestartBOT();
        }
    }, Settings.ConnectionWatchDog);
}

function CrashHandler(exception) {
    //TODO
}

async function RestartBOT() {
    Client.destroy();
    BootBOT();
}

async function Exit(Exitcode = 0) {
    MarfBOT.wlog("Exiting MarfBOT with Exitcode: " + Exitcode + " and destroying Discord connection...");
    Client.destroy();
    process.exit(Exitcode);
}

function BootBOT() {
    MarfBOT.clog("MYSQL", "Setting up MySQL connection...");
    MySQL.createConnection({ host: Settings.mysql_host, user: Settings.mysql_user, password: Settings.mysql_pass, database: Settings.mysql_db})
    .then((db) => {
        MarfBOT.clog("MYSQL", "Connection successful, Setting MySQLProvider");
        Client.setProvider(new MySQLProvider(db));
        MarfBOT.clog("WTchDoG", "Init ConnectionWatchDog");
        ConnectionWatchDog();
        MarfBOT.nlog("Connecting to Discord...")
        Client.login(Settings.token);
        Console.log(Client.Status);
    });
}

//Console
stdin.addListener("data", function(d) {
        readline = d.toString().trim();
    switch (readline) {
                case("exit"):
                    process.exit(0);
                break;
                default:
                        MarfBOT.elog("Unknown command! type \"list\" for a list of commands.");
                break;
    }
});