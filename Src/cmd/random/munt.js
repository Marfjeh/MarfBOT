const commando = require('discord.js-commando');

class MuntCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'munt',
            group: 'random',
            memberName: 'munt',
            description: 'munt of kop!'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 2) + 1;
        switch (roll) {
          case 1:
            message.reply("Munt!");
            break;

            case 2:
            message.reply("Kop!");
            break;
          default:

        }
        console.log("Run !munt output: " + roll);
    }
}

module.exports = MuntCommand;
