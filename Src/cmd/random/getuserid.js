const commando = require('discord.js-commando');

class getnameCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'getuserid',
            group: 'random',
            memberName: 'getuserid',
            description: 'Returns your name id.'
        });
    }

    async run(message, args) {
      message.author.send("Your user id is: ```" + message.author + "```");
      message.reply("Send you a DM with your ID.");
    }
}

module.exports = getnameCommand;
