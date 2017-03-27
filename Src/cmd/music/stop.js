const commando = require('discord.js-commando');
const marfBOT = require("../../MarfBOT.js");
const discord = require("discord.js");
const ytdl = require('ytdl-core');
const client = new discord.Client();

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stop',
            group: 'music',
            memberName: 'stop',
            description: 'stop the music.'
        });
    }

    async run(message, args) {
        message.member.voiceChannel.join()
        .then(connection => {
                connection.disconnect();
        })
        .catch(marfBOT.elog);
    }
}

module.exports = DiceRollCommand;
