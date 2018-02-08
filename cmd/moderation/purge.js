const commando = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class PurgeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            group: 'moderation',
            memberName: 'purge',
            description: 'purge amound of messages. (Needs to be manualy enabled `]enable purge`)',
            userPermission: ['MANAGE_MESSAGES']
        });
    }

    async run(message, args) {
        let messagecount = parseInt(args) + 1;
            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    }
};