const commando = require('discord.js-commando');

module.exports = class DiceRollCommand extends commando.Command {
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
        let roll = Math.floor(Math.random() * 6) + 1;
        message.reply("Rolled: " + roll);
    }
};
