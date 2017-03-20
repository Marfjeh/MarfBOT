const commando = require('discord.js-commando');
const url = require("url");

var api = "http://api.icndb.com/jokes/random/";

class chuckjokeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'chuckjoke',
            group: 'random',
            memberName: 'chuckjoke',
            description: 'Get a random Chuck Norris Joke.'
        });
    }

    async run(message, args) {
        message.channel.sendMessage("MarfBot Error! Exception: ``` . ```");
    }
}

module.exports = chuckjokeCommand;
