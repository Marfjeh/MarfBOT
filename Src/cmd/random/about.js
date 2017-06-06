const commando = require('discord.js-commando');

class AboutCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'random',
            memberName: 'about',
            description: 'about me...'
        });
    }

    async run(message, args) {
        message.channel.sendMessage(
	"```\n  __  __             __ ____   ____ _______  \n" +
	    " |  \\/  |           / _|  _ \\ / __ \\__   __| \n" +
	    " | \\  / | __ _ _ __| |_| |_) | |  | | | |    \n" +
	    " | |\\/| |/ _` | '__|  _|  _ <| |  | | | |    \n" +
	    " | |  | | (_| | |  | | | |_) | |__| | | |    \n" +
	    " |_|  |_|\\__,_|_|  |_| |____/ \\____/  |_|    \n```");
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
                    value: "1.0"
                },
                {
                    name: "Command list",
                    value: "Type ```]help```"
                }
            ],
            });
      }

}

module.exports = AboutCommand;
