const commando = require('discord.js-commando');
const bot = new commando.Client();
const fs = require("fs");

class pslistCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pslist',
            group: 'music',
            memberName: 'pslist',
            description: 'Get a list of Sound effects!'
        });
    }

    async run(message, args) {
        var path = "/home/marf/Cloud9/MarfBOT/Src/sounds";
        var list = "";
        fs.readdir(path, function(err, items) {
 
        for (var i=0; i<items.length; i++) {
            list = list + items[i].slice(0, -4) + " ";
        }
        message.channel.sendMessage("List of Sound effects\n ```" + list + "```");
        });
      }

}

module.exports = pslistCommand;
