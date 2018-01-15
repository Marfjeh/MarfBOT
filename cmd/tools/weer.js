const commando = require('discord.js-commando'),
      MarfBOT  = require('../../MarfBOT.js');

class weerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'weer',
            aliases: ['weather', 'radar', 'buienradar'],
            group: 'tools',
            memberName: 'weer',
            description: 'Get a weather image of the current weather supported arguments: europe, eur, latvain, lv, cloud, wolken, thunder, onweer, usa.'
        });
    }

    async run(message, args) {
        if (args === null || args === "") {
            sendmap("https://api.buienradar.nl/image/1.0/RadarMapNL?w=1024&h=1024&random=" + Math.random() + ".gif", "http://www.buienradar.nl/", "Buienradar");
        }
        else if (args.toLowerCase() === "europe" || args.toLowerCase() === "eur") {
            sendmap("https://api.buienradar.nl/image/1.0/radarmapeu/?ext=gif&random=" + Math.random() + ".gif", "https://www.buienradar.nl/wereldwijd/europa/buienradar/3uurs", "Buienradar - Europe");
		}
		else if (args.toLowerCase() === "latvain" || args.toLowerCase() === "lv" || args.toLowerCase() === "latvia" || args.toLowerCase() === "latvija" || args.toLowerCase() === "latveja") {
            sendmap("http://lietus.lv/sri/srilast.gif?random=" + Math.random()+ ".gif", "http://lietus.lv/", "SRI - rain/snow radar");
		}
		else if (args.toLowerCase() === "cloud" || args.toLowerCase() === "wolken") {
            sendmap("https://api.buienradar.nl/image/1.0/cloudmapnl/?ext=gif&random=" + Math.random() + ".gif", "https://www.buienradar.nl/nederland/zon-en-wolken/wolkenradar", "Buienradar - CloudRadar");
		}
        else if (args.toLowerCase() === "thunder" || args.toLowerCase() === "onweer") {
            sendmap("https://api.buienradar.nl/image/1.0/lightningnl/?ext=gif&random=" + Math.random() + ".gif", "https://www.buienradar.nl/nederland/neerslag/onweerradar", "Buienradar - Onweer/Thunder");
        }
        else if (args.toLowerCase() === "uv" || args.toLowerCase() === "sunpower" || args.toLowerCase() === "zonkracht") {
            sendmap("https://api.buienradar.nl/image/1.0/sunpowereu?forc=32&random=" + Math.random() + ".gif", "https://www.buienradar.nl/nederland/zon-en-wolken/zonkracht-uv", "Buienradar - UV Radar");
        }
        else if (args.toLowerCase() === "usa" || args.toLowerCase() === "north-america" || args.toLowerCase() === "america") {
            sendmap("https://api.buienradar.nl/image/1.0/satvisualworld/?ext=gif&hist=7&forc=1&step=0&type=ge&random=" + Math.random() + ".gif", "https://www.buienradar.nl/wereldwijd/noord-amerika/satelliet", "Buienradar - North-America");
        }
        else if (args.toLowerCase() === "temp" || args.toLowerCase() === "tempratuur") {
            //soon (TM)
        }
        else {
            message.channel.send(MarfBOT.embedMessage(MarfBOT.ErroColor, ":warning: Invailid argument!"));
        }

        function sendmap(map_image, url_website, message_title) {
            //This is a work around for discord image caching. If you run the same command a day after it will still show the last image it sended. This will resolve this issue.
            let map_image_nocache = map_image + "&random=" + Math.random() + ".gif";

            message.channel.send({
                "embed": {
                        title: message_title,
                        url: url_website,
                        "image": {
                            "url": map_image_nocache,
                        }
                    }
                });
        }
    }
}

module.exports = weerCommand;
