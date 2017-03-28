//https://discordapp.com/oauth2/authorize?client_id=263948498351685632&scope=bot&permissions=0
const commando = require('discord.js-commando');

class weerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'tools',
            memberName: 'invite',
            description: 'Send you a link to let me join your Discord Server!'
        });
    }

    async run(message, args) {
        var date = new Date();
        var n = date.toDateString();
        var time = date.toLocaleTimeString();
        
        message.reply("Awesome! Here's my invite link: https://discordapp.com/oauth2/authorize?client_id=263948498351685632&scope=bot&permissions=3333120");
    }
}

module.exports = weerCommand;
