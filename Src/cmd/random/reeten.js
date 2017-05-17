const commando = require('discord.js-commando'),
      marfBOT = require("../../MarfBOT.js");

class reetenCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'reeten',
            group: 'random',
            memberName: 'reeten',
            description: 'Dumpertreeten in Discord! gebruik: !reeten [0-5]'
        });
    }

    async run(message, args) {
        if (marfBOT.minmax(1, 5, parseInt(args)) == true) {
       message.channel.sendMessage({
        "embed": {
                "image": {
                "url": "http://fileserver.marfprojects.nl/MarfBOT/reet" + args + ".png",
                },
            }
        });
        }
        else
        {
            message.channel.sendMessage("Maximaal 0.5 t/m 5!");
        }
            
    }

}

module.exports = reetenCommand;
