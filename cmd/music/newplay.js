const   commando = require('discord.js-commando'),
    discord = require("discord.js"),
    ytdl = require('ytdl-core'),
    client = new discord.Client();

class PlayCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'newplay',
            group: 'music',
            memberName: 'newplay',
            description: 'MarfBOT\'s new music system. WIP and very expermental.'
        });
    }

    async run(message, args) {
       //TODO
    }
}

module.exports = PlayCommand;
