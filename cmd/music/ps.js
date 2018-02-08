const   commando = require('discord.js-commando'),
        marfBOT = require("../../MarfBOT-Legacy.js"),
        discord = require("discord.js"),
        MusicFolder = __dirname + "/../../assets/sounds/";

module.exports = class PsCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ps',
            group: 'music',
            memberName: 'ps',
            description: 'play a sound effect!'
        });
    }

    async run(message, args) {
        if (!message.member.voiceChannel) { 
            message.reply("Error: You're not in a voicechannel!"); 
        }
        else {
            //const channel = message.member.voiceChannel;
            const streamOptions = { seek: 0, volume: 1 };
            message.member.voiceChannel.join().then(connection => {
            const dispatcher = connection.playFile(MusicFolder + args.toLowerCase() + '.ogg');
            marfBOT.clog("Ps   ", "Playing: " + args);
            //dispatcher.on('end', () => connection.disconnect());
            }).catch(marfBOT.elog);
            message.delete();
            if (args === "gaben" && Math.floor(Math.random() * 7) + 1 === 5 || args === "steam" && roll === 5) {
                message.channel.sendMessage({"embed": {title: 'PRAISE LORD GABEN', "image": { "url": "http://gabegaming.com/static/img/gabe.png", }}});
            }
        }
    }
};
