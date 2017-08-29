const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            aliases: ['dice'],
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a dice'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("Rolled: " + roll);
    }
}

module.exports = DiceRollCommand;
