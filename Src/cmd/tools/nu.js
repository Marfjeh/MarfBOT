const commando = require('discord.js-commando');

class nuCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'nu',
            group: 'tools',
            memberName: 'nu',
            description: 'Laaste 10 nieuws artiekelen van nu - algemeen'
        });
    }

    async run(message, args) {
       var parser = require('rss-parser');
       
        
        var nieuwsberichten_title = "";        
        var nieuwsberichten_text = [];
        var nieuwsberichten_url = [];
        var nieuwsberichten_dis = [];

        message.reply("Hang on, Parsing Nu.nl news...");
        
        parser.parseURL('http://www.nu.nl/rss/Algemeen', function(err, parsed) {
                nieuwsberichten_title = parsed.feed.title;
            parsed.feed.entries.forEach(function(entry) {
                
                nieuwsberichten_text.push(entry.title);
                nieuwsberichten_url.push(entry.link);
            });
            setTimeout(function(){
               message.channel.sendEmbed({
                title: nieuwsberichten_title,
                description: "laaste 10 nieuws artiekelen.",
                url: 'http://www.nu.nl/',
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
                    icon_url: 'http://www.nu.nl/static/img/atoms/images/logos/favicon.ico',
                }
            });
                }, 1000);
            
        });
    
    }
}

module.exports = nuCommand;
