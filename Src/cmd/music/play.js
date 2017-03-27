const commando = require('discord.js-commando');
const marfBOT = require("../../MarfBOT.js");
const discord = require("discord.js");
const ytdl = require('ytdl-core');
const client = new discord.Client();

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'play a youtube url!'
        });
    }

    async run(message, args) {
        //const channel = message.member.voiceChannel;
        const streamOptions = { seek: 0, volume: 1 };
        message.member.voiceChannel.join()
        .then(connection => {
                const stream = ytdl(args, {filter : 'audioonly', videoDefinition: 'high'});
                const dispatcher = connection.playStream(stream, streamOptions);
                marfBOT.clog("Music", "Playing: " + args);
                dispatcher.on('end', () => connection.disconnect());
        })
        .catch(marfBOT.elog);
    }
}

module.exports = DiceRollCommand;
