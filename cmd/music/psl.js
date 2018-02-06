const   commando = require('discord.js-commando'),
        marfBOT = require("../../MarfBOT-Legacy.js"),
        discord = require("discord.js"),
        MusicFolder = __dirname + "/../../assets/sounds/";

class PslCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'psl',
            group: 'music',
            memberName: 'psl',
            description: 'play a sound effect! and leaves the channel after playback.',
            throttling: {
                usages: 1,
                duration: 2
            }
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
                const dispatcher = connection.playFile(MusicFolder + args + '.ogg');
                marfBOT.clog("Ps   ", "Playing: " + args);
                dispatcher.on('end', () => connection.disconnect());
        }).catch(marfBOT.elog);
        message.delete();

        var roll = Math.floor(Math.random() * 7) + 1;
        if (args == "gaben" && roll == 5 || args == "steam" && roll == 5) {
            message.channel.sendMessage({
                "embed": {
                    title: 'PRAISE LORD GABEN',
                    "image": {
                        "url": "http://gabegaming.com/static/img/gabe.png",
                    }
                }
            });
        }
    }
    }
}

module.exports = PslCommand;
