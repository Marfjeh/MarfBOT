const commando = require('discord.js-commando');
const bot = new commando.Client();

class StatusCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'random',
            memberName: 'about',
            description: 'about me...'
        });
    }

    async run(message, args) {
        message.channel.sendEmbed({
                title: "MarfBOT",
                description: "Hi I'm MarfBOT! Im giving basic infromation, i can send you the latest weather, News or tech news. i also do more! \nBy Marvin Ferwerda, Crazymarf#0020",
                url: 'https://github.com/Marfjeh/MarfBOT_Issues',
                fields: [
                {
                    name:  "I'm running on",
                    value: 'NodeJS'
                },
                {
                    name: "Version info",
                    value: "0.6"
                },
                {
                    name: "Command list",
                    value: "Type ```]help```"
                }
            ],
            });
      }

}

module.exports = StatusCommand;
