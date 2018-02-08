const commando = require('discord.js-commando'),
      Discord  = require('discord.js'),
      MarfLib  = require('../../MarfBOT.js'), MarfBOT  = new MarfLib(),
      MySQL    = require('mysql2/promise');

class SettingCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'setting',
            group: 'moderation',
            memberName: 'setting',
            aliases: ['set'],
            description: 'Command to change settings for in the guild. type ]setting help or ]set help (needs to have Admin rights in the guild)',
            userPermission: ['MANAGE_MESSAGES']
        });
    }

    async run(message, args) {
        const getGuildid = message.guild.id;
        if (args.toLowercase() === "help") {
            message.channel.send("");
            return;
        }


    }
}

module.exports = SettingCommand;