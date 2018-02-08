const commando = require('discord.js-commando'),
	        marfBOT = require("../../MarfBOT-Legacy.js"),
	        discord = require("discord.js"),
	        ytdl = require('ytdl-core'),
	        client = new discord.Client();

module.exports = class LiveCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'live',
            group: 'music',
            memberName: 'live',
            description: 'play a live stream! usage: ]live <url>'
        });
    }

    async run(message, args) {
        const streamOptions = {seek: 0, volume: 1};
        message.member.voiceChannel.join().then(connection => {
            connection.playStream(args);
        }).catch(marfBOT.elog);

    }
};