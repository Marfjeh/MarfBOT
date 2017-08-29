const   commando = require('discord.js-commando'),
        marfBOT = require("../../MarfBOT.js");


class StopCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stop',
            group: 'music',
            memberName: 'stop',
            description: 'stop the music.'
        });
    }

    async run(message, args) {
        message.member.voiceChannel.leave();
    }
}

module.exports = StopCommand;
