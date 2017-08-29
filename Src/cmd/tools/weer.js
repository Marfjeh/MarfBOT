const commando = require('discord.js-commando');

class weerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'weer',
            group: 'tools',
            memberName: 'weer',
            description: 'Get a buienradar image of the current weather supported arguments: europe, eur, latvain, lv, cloud, wolken, thunder, onweer.'
        });
    }

    async run(message, args) {
        let date   = new Date();
        let n      = date.toDateString();
        let time   = date.toLocaleTimeString();

	    let titlee = "Buienradar";
	    let urla   = "http://www.buienradar.nl/";
	    let mapurl = "https://api.buienradar.nl/image/1.0/RadarMapNL?w=1024&h=1024&random=" + Math.random() + ".gif";

        if (args.toLowerCase() === "europe" || args.toLowerCase() === "eur") {
			mapurl   = "https://api.buienradar.nl/image/1.0/radarmapeu/?ext=gif&random=" + Math.random() + ".gif";
			urla     = "https://www.buienradar.nl/wereldwijd/europa/buienradar/3uurs";
			titlee   = "Buienradar - Europe"
		}
		if (args.toLowerCase() === "latvain" || args.toLowerCase() === "lv") {
			mapurl   = "http://lietus.lv/sri/srilast.gif?random=" + Math.random()+ ".gif";
			urla     = "http://lietus.lv/";
			titlee   = "SRI - rain/snow radar";
		}
		if (args.toLowerCase() === "cloud" || args.toLowerCase() === "wolken") {
			mapurl   = "https://api.buienradar.nl/image/1.0/cloudmapnl/?ext=gif&random=" + Math.random() + ".gif";
			urla     = "https://www.buienradar.nl/nederland/zon-en-wolken/wolkenradar";
			titlee   = "Buienradar - CloudRadar";
		}
        if (args.toLowerCase() === "thunder" || args.toLowerCase() === "onweer") {
            mapurl  = "https://api.buienradar.nl/image/1.0/lightningnl/?ext=gif&random=" + Math.random() + ".gif";
            urla    = "https://www.buienradar.nl/nederland/neerslag/onweerradar";
            titlee  = "Buienradar - Onweer/Thunder";
        }
        if (args.toLowerCase() === "uv" || args.toLowerCase() === "sunpower" || args.toLowerCase("zonkracht")) {
            mapurl  = "https://api.buienradar.nl/image/1.0/sunpowereu?forc=32&random=" + Math.random() + ".gif";
            urla    = "https://www.buienradar.nl/nederland/zon-en-wolken/zonkracht-uv";
            titlee  = "Buienradar - UV Radar";
        }
        if (args.toLowerCase() === "temp" || args.toLowerCase() === "tempratuur") {
            //soon (TM)
        }

        message.channel.send({
        "embed": {
                title: titlee,
                url: urla,
                "image": {
                    "url": mapurl,
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
