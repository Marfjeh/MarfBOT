/*
  _____  ______ _____  _____  ______ _____       _______ ______ _____
 |  __ \|  ____|  __ \|  __ \|  ____/ ____|   /\|__   __|  ____|  __ \
 | |  | | |__  | |__) | |__) | |__ | |       /  \  | |  | |__  | |  | |
 | |  | |  __| |  ___/|  _  /|  __|| |      / /\ \ | |  |  __| | |  | |
 | |__| | |____| |    | | \ \| |___| |____ / ____ \| |  | |____| |__| |
 |_____/|______|_|    |_|  \_\______\_____/_/    \_\_|  |______|_____/
 Need to rewrite it.
 */
const   commando = require('discord.js-commando'),
        marfBOT = require("../../MarfBOT-Legacy.js"),
        discord = require("discord.js"),
        ytdl = require('ytdl-core'),
        client = new discord.Client();

module.exports = class PlayCommand extends commando.Command {
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
};