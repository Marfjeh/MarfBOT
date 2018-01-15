const commando = require('discord.js-commando'),
      MarfBOT = require("../../MarfBOT.js");

class InviteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'tools',
            memberName: 'invite',
            description: 'Send you a link to let me join your Discord Server!'
        });
    }

    async run(message, args) {  
        message.channel.send(MarfBOT.embedMessage(MarfBOT.NormColor, 
                                "To invite Marfbot to your server, press on the link below it also has the permissions preset.", 
                                "[Invite MarfBOT to your server](https://discordapp.com/oauth2/authorize?client_id=263948498351685632&scope=bot&permissions=3333120")
            );
    }
}

module.exports = InviteCommand;
