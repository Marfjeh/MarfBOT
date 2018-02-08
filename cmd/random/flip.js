const commando = require('discord.js-commando');

module.exports =  class MuntCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'random',
            memberName: 'flip',
            description: 'Flip a coin.'
        });
    }

    async run(message, args) {
        if (Math.floor(Math.random() * 2) + 1 === 1)
            message.reply("Tails!");
        else
            return message.reply("Heads!");
    }
};
