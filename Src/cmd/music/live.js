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
        //const channel = message.member.voiceChannel;
        const streamOptions = { seek: 0, volume: 1 };
        message.member.voiceChannel.join()
        .then(connection => {
          var request = require("request");
          var stream = request("http://mp3.stream.tb-group.fm:80/ht.mp3");
          connection.playRawStream(stream).catch(error); //error is a function who show errors on the console
        })
        .catch(marfBOT.elog);

    }
}

module.exports = LiveCommand;
