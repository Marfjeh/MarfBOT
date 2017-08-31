const commando = require('discord.js-commando'),
      marfBOT  = require("../../MarfBOT.js");

class BugReportCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'secret',
            aliases: ['s'],
            group: 'tools',
            memberName: 'secret',
            description: 'Delete the message after 10 seconds.'
        });
    }

    async run(message, args) {
        message.delete(10000);
        marfBOT.nlog("removed a message: <" + message.author + "> " + args);
        
    }
}

module.exports = BugReportCommand;