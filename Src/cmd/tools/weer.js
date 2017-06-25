const commando = require('discord.js-commando');

class weerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'weer',
            group: 'tools',
            memberName: 'weer',
            description: 'Get a buienradar image of the current weather'
        });
    }

    async run(message, args) {
        message.reply("Hang on, Getting tha file!");
        var date = new Date();
        var n = date.toDateString();
        var time = date.toLocaleTimeString();
		var mapurl = "https://api.buienradar.nl/image/1.0/RadarMapNL?w=1024&h=1024&t=";
        if (args.toLowerCase() === "europe" || args.toLowerCase() === "eur") {
			mapurl = "https://api.buienradar.nl/image/1.0/radarmapeu/?ext=gif$t=";
		}	

        message.channel.sendMessage({
        "embed": {
                title: 'Buienradar',
                url: 'http://www.buienradar.nl/',
                "image": {
                    "url": mapurl + Math.random() + ".gif",
                },
                footer: {
                    text: n + " " + time,
                    icon_url: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678120-calendar-clock-512.png'
                }
            }
        });
    }
}

module.exports = weerCommand;
