const   Dcmd    = require("discord.js-commando"),
        Discord = require("discord.js"),
        Path    = require("path"),
        MarfBOT = require("./MarfBOT.js"),
        MySQL   = require('mysql2/promise'),
        MySQLProvider = require('discord.js-commando-mysqlprovider'),
        Settings = require("./settings.json"),
        stdin = process.openStdin(),
        Client  = new Dcmd.Client({commandPrefix: Settings.prefix, owner: Settings.owner});

MarfBOT.clog("KERNEL", "MarfBOT² kernel init");
MarfBOT.clog("KERNEL", "Register commands...");
Client.registry
        .registerGroups([
                ['random', 'Random commands'],
                ['moderation', 'Moderation commands'],
                ['music', 'music commands'],
                ['minecraft', 'minecraft stuff'],
                ['tools', 'tool commands']
        ])
.registerDefaults()
.registerCommandsIn(Path.join(__dirname, 'cmd'));

MarfBOT.clog("MYSQL", "Setting up MySQL connection...");
MySQL.createConnection({ 
        host: Settings.mysql_host, 
        user: Settings.mysql_user, 
        password: Settings.mysql_pass, 
        database: Settings.mysql_db
    }).then((db) => {
        MarfBOT.clog("MYSQL", "Connection succesful, Setting MySQLProvider");
        Client.setProvider(new MySQLProvider(db));
        MarfBOT.nlog("Connecting to Discord...")
        Client.login(Settings.token);
});


//Events.
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



//Console
stdin.addListener("data", function(d) {
        readline = d.toString().trim();
    switch (readline) {
                default:
                        MarfBOT.elog("Unknown command! type \"list\" for a list of commands.");
                break;
    }
});