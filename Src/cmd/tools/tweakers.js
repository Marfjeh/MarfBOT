const commando = require('discord.js-commando');

class tweakersCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'tweakers',
            group: 'tools',
            memberName: 'tweakers',
            description: 'Laaste 10 nieuws artiekelen van Tweakers.'
        });
    }

    async run(message, args) {
       var parser = require('rss-parser');
       
        
        var nieuwsberichten_title = "";        
        var nieuwsberichten_text = [];
        var nieuwsberichten_url = [];

        message.reply("Hang on, Parsing tweakers news...");
        
        parser.parseURL('http://feeds.feedburner.com/tweakers/nieuws', function(err, parsed) {
                nieuwsberichten_title = parsed.feed.title;
            parsed.feed.entries.forEach(function(entry) {
                
                nieuwsberichten_text.push(entry.title);
                nieuwsberichten_url.push(entry.link);
            });
            
            if (err == true)
            {
                message.channel.sendMessage("Error!");
            }
            
            if (args == "2") {
                setTimeout(function(){
               message.channel.sendEmbed({
                title: nieuwsberichten_title,
                description: "laaste 10-20 nieuws artiekelen. (2/2)",
                url: 'https://tweakers.net/nieuws/',
                fields: [
                {
                    name: nieuwsberichten_text[10],
                    value: '[lees verder](' + nieuwsberichten_url[10] + ')'
                },
                {
                    name: nieuwsberichten_text[11],
                    value: '[lees verder](' + nieuwsberichten_url[11] + ')'
                },
                {
                    name: nieuwsberichten_text[12],
                    value: '[lees verder](' + nieuwsberichten_url[12] + ')'
                },
                {
                    name: nieuwsberichten_text[13],
                    value: '[lees verder](' + nieuwsberichten_url[13] + ')'
                },
                {
                    name: nieuwsberichten_text[14],
                    value: '[lees verder](' + nieuwsberichten_url[14] + ')'
                },
                {
                    name: nieuwsberichten_text[15],
                    value: '[lees verder](' + nieuwsberichten_url[15] + ')'
                },
                {
                    name: nieuwsberichten_text[16],
                    value: '[lees verder](' + nieuwsberichten_url[16] + ')'
                },
                {
                    name: nieuwsberichten_text[17],
                    value: '[lees verder](' + nieuwsberichten_url[17] + ')'
                },
                {
                    name: nieuwsberichten_text[18],
                    value: '[lees verder](' + nieuwsberichten_url[18] + ')'
                },
                {
                    name: nieuwsberichten_text[19],
                    value: '[lees verder](' + nieuwsberichten_url[19] + ')'
                }
            ],
                footer: {
                    text: nieuwsberichten_title,
                    icon_url: 'https://tweakers.net/favicon.ico'
                }
            });
                }, 1000);
                
            }
            else {
                setTimeout(function(){
               message.channel.sendEmbed({
                title: nieuwsberichten_title,
                description: "laaste 10 nieuws artiekelen. (1/2) typ >tweakers 2 voor meer nieuws.",
                url: 'https://tweakers.net/nieuws/',
                fields: [
                {
                    name: nieuwsberichten_text[0],
                    value: '[lees verder](' + nieuwsberichten_url[0] + ')'
                },
                {
                    name: nieuwsberichten_text[1],
                    value: '[lees verder](' + nieuwsberichten_url[1] + ')'
                },
                {
                    name: nieuwsberichten_text[2],
                    value: '[lees verder](' + nieuwsberichten_url[2] + ')'
                },
                {
                    name: nieuwsberichten_text[3],
                    value: '[lees verder](' + nieuwsberichten_url[3] + ')'
                },
                {
                    name: nieuwsberichten_text[4],
                    value: '[lees verder](' + nieuwsberichten_url[4] + ')'
                },
                {
                    name: nieuwsberichten_text[5],
                    value: '[lees verder](' + nieuwsberichten_url[5] + ')'
                },
                {
                    name: nieuwsberichten_text[6],
                    value: '[lees verder](' + nieuwsberichten_url[6] + ')'
                },
                {
                    name: nieuwsberichten_text[7],
                    value: '[lees verder](' + nieuwsberichten_url[7] + ')'
                },
                {
                    name: nieuwsberichten_text[8],
                    value: '[lees verder](' + nieuwsberichten_url[8] + ')'
                },
                {
                    name: nieuwsberichten_text[9],
                    value: '[lees verder](' + nieuwsberichten_url[9] + ')'
                },
            ],
                footer: {
                    text: nieuwsberichten_title,
                    icon_url: 'https://tweakers.net/favicon.ico'
                }
            });
                }, 1000);
                
            }
            
        });
    
    }
}

module.exports = tweakersCommand;
