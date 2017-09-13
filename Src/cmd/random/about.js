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
        message.channel.send(
	"```\n  __  __             __ ____   ____ _______  \n" +
	    " |  \\/  |           / _|  _ \\ / __ \\__   __| \n" +
	    " | \\  / | __ _ _ __| |_| |_) | |  | | | |    \n" +
	    " | |\\/| |/ _` | '__|  _|  _ <| |  | | | |    \n" +
	    " | |  | | (_| | |  | | | |_) | |__| | | |    \n" +
	    " |_|  |_|\\__,_|_|  |_| |____/ \\____/  |_|    \n```");
        message.channel.send({
            "embed": {
                title: "MarfBOT",
                description: "Hi I'm MarfBOT! Im giving basic infromation, i can send you the latest weather, News or tech news. i also do more! \nBy Marvin Ferwerda, Crazymarf#0020",
                fields: [
                {
                    name: "Version info",
                    value: "1.2"
                },
                {
                    name: "Command list",
                    value: "Type ```]help```"
                },
                {
                    name: "Invite me to your discord server",
                    value: "https://discordapp.com/oauth2/authorize?client_id=263948498351685632&scope=bot&permissions=3333120"
                }
            ],
            }});
      }

}

module.exports = AboutCommand;
