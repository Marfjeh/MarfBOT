const commando = require('discord.js-commando');

class BugReportCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bug',
            group: 'tools',
            memberName: 'bug',
            description: 'Found a bug? do you want to report it? https://github.com/Marfjeh/MarfBOT_Issues'
        });
    }

    async run(message, args) {
        message.reply("You can report any bug/glitches and any ideas to this github page: https://github.com/Marfjeh/MarfBOT_Issues");
    }
}

module.exports = BugReportCommand;
