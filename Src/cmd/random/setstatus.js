const commando = require('discord.js-commando');
const bot = new commando.Client();

class StatusCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'setstatus',
            group: 'random',
            memberName: 'setstatus',
            description: 'Sets the status text'
        });
    }

    async run(message, args) {
        message.reply("Does not work use >Status instead.");
      }

}

module.exports = StatusCommand;
