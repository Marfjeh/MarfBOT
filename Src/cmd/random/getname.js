const commando = require('discord.js-commando');

class getnameCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'getname',
            group: 'random',
            memberName: 'getname',
            description: 'Returns your name id.'
        });
    }

    async run(message, args) {
      message.reply("```" + message.author + "```");
    }
}

module.exports = getnameCommand;
