const commando = require('discord.js-commando');

class MuntCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'random',
            memberName: 'flip',
            description: 'Flip a coin.'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 2) + 1;
        switch (roll) {
          case 1:
            message.reply("Tails!");
            break;

            case 2:
            message.reply("Heads!");
            break;
          default:

        }
        console.log("Run !munt output: " + roll);
    }
}

module.exports = MuntCommand;
