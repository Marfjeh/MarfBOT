const   commando = require('discord.js-commando'),
        discord = require("discord.js");

class JoinCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'join the current voiceChannel without playing something.'
        });
    }

    async run(message, args) {
        message.member.voiceChannel.join();
    }
}

module.exports = JoinCommand;
