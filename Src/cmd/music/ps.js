const commando = require('discord.js-commando');
const marfBOT = require("../../MarfBOT.js");
const discord = require("discord.js");
const ytdl = require('ytdl-core');
const fs = require('fs');
const client = new discord.Client();
const MusicFolder = __dirname + "/../../sounds/";
var soundlist = "";

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ps',
            group: 'music',
            memberName: 'ps',
            description: 'play a SNC/OXC sound effect!'
        });
    }

    async run(message, args) {
        //const channel = message.member.voiceChannel;
        const streamOptions = { seek: 0, volume: 1 };
        message.member.voiceChannel.join()
        .then(connection => {
                const dispatcher = connection.playFile(MusicFolder + args + '.ogg');
                marfBOT.clog("Ps   ", "Playing: " + args);
                dispatcher.on('end', () => connection.disconnect());
        })
        .catch(marfBOT.elog);
        
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

module.exports = DiceRollCommand;
