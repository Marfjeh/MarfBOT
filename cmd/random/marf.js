const commando = require('discord.js-commando'),
      marfBOT = require("../../MarfBOT.js");

class reetenCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'marf',
			aliases: ['marfen', 'marfin', 'marfvin', 'marvin'],
            group: 'random',
            memberName: 'marf',
            description: 'A hidden command.'
        });
    }

    async run(message, args) {
        if (marfBOT.minmax(1, 5, parseInt(args)) == true) {
       message.channel.send({
        "embed": {
                "image": {
                "url": "http://fileserver.marfprojects.nl/MarfBOT/marf" + args + ".png",
                },
            }
        });
        }
        else
        {
            message.channel.sendMessage("Maximaal 1 t/m 5!");
        }
            
    }

}

module.exports = reetenCommand;
