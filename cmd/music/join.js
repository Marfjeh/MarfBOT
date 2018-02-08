const commando = require('discord.js-commando');

module.exports = class JoinCommand extends commando.Command {
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
