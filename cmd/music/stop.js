const   commando = require('discord.js-commando'),
        marfBOT = require("../../MarfBOT-Legacy.js");


module.exports = class StopCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stop',
            aliases: ['exit', 'leave'],
            group: 'music',
            memberName: 'stop',
            description: 'stop the current playback and leave the voice channel.'
        });
    }

    async run(message, args) {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.leave();
        }
        else {
            message.reply("Error: You're not in a Voicechannel...");
        }
        
    }
};
