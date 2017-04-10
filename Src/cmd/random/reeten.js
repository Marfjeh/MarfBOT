const commando = require('discord.js-commando');
const marfBOT = require("../../MarfBOT.js");

class getnameCommand extends commando.Command {
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
            message.channel.sendMessage("0 reeten!");
        }
            
    }

}

module.exports = getnameCommand;
