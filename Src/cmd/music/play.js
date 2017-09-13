const   commando = require('discord.js-commando'),
        marfBOT = require("../../MarfBOT.js"),
        discord = require("discord.js"),
        ytdl = require('ytdl-core'),
        client = new discord.Client();

class PlayCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'play a youtube url!'
        });
    }

    async run(message, args) {
        if (!message.member.voiceChannel) { 
            message.reply("Error: You're not in a voicechannel!"); 
        }
        else {
            //const channel = message.member.voiceChannel;
            const streamOptions = { seek: 0, volume: 1 };
            message.member.voiceChannel.join()
            .then(connection => {
                    const stream = ytdl(args.replace("<", "").replace(">", ""), {filter : 'audioonly', videoDefinition: 'high', quality: 'highest'});
                    const dispatcher = connection.playStream(stream, streamOptions);
                    marfBOT.clog("Music", "Playing: " + args);
                    //dispatcher.on('end', () => connection.disconnect());
            })
            .catch(marfBOT.elog);
        }
    }
}

module.exports = PlayCommand;
