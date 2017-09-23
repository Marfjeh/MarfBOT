const commando = require('discord.js-commando'),
      MarfBOT = require('../../MarfBOT.js');

class InviteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'msgbox',
            group: 'experimental',
            memberName: 'msgbox',
            description: 'Output a msgbox to test the messagebox builder.'
        });
    }

    async run(message, args) {
        MarfBOT.msgbox(message, ":warning: " + args, "sample subtext", "error");
    }
}

module.exports = InviteCommand;
