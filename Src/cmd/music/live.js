const   commando = require('discord.js-commando'),
        marfBOT = require("../../MarfBOT.js"),
        discord = require("discord.js"),
        ytdl = require('ytdl-core'),
        client = new discord.Client();

class LiveCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'live',
            group: 'music',
            memberName: 'live',
            description: 'play a live stream! usage: ]live <url>'
        });
    }

    async run(message, args) {
        if (args.srartsWith("https://www.youtu")) {
            message.reply("Sorry, Youtube live streams are not supported yet on this MarfBot Version. :(")
        }
        else
        {
        const streamOptions = { seek: 0, volume: 1 };
        message.member.voiceChannel.join().then(connection => {
          connection.playStream(args);
        }).catch(marfBOT.elog);

    }
}

module.exports = LiveCommand;
