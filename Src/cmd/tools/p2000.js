const commando = require('discord.js-commando');

class p2000Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'p2000',
            group: 'tools',
            memberName: 'p2000',
            description: 'Laaste 20 meldingen van de landelijk P2000 Systeem.'
        });
    }

    async run(message, args) {
       var parser = require('rss-parser');
       
        
        var nieuwsberichten_title = "";        
        var nieuwsberichten_text = [];
        var nieuwsberichten_url = [];

        message.reply("Hang on, Parsing P2000 messages...");
        
        parser.parseURL('https://alarmeringen.nl/feeds/region/haaglanden.rss', function(err, parsed) {
                nieuwsberichten_title = parsed.feed.title;
            parsed.feed.entries.forEach(function(entry) {
                
                nieuwsberichten_url.push(entry.link);
                
                //var title_data = ;
                if (entry.title.startsWith("a1") || entry.title.startsWith("a2") || entry.title.startsWith("b1") || entry.title.startsWith("b2")) {
                    nieuwsberichten_text.push(":ambulance: " + entry.title);
                }
                else if (entry.title.startsWith("prio 1") || entry.title.startsWith("prio 2")) {
                    nieuwsberichten_text.push(":police_car: " + entry.title);
                }
                else if (entry.title.startsWith("p 1") || entry.title.startsWith("p 2")) {
                    nieuwsberichten_text.push(":fire_engine: " + entry.title);
                }
                else {
                    nieuwsberichten_text.push(":warning: " + entry.title);
                }
            });
            
            if (args == "2") {
                setTimeout(function(){
               message.channel.sendEmbed({
                title: "P2000 - Haaglanden",
                description: "laaste 10-20 meldingen. (2/2)",
                url: 'https://alarmeringen.nl/haaglanden/',
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
                    text: "P2000 Monitor beta",
                    icon_url: 'https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/pager.png'
                }
            });
                }, 1000);
                
            }
            else {
                setTimeout(function(){
               message.channel.sendEmbed({
                title: "P2000 - Haaglanden",
                description: "laaste 10-20 meldingen. (1/2)",
                url: 'https://alarmeringen.nl/haaglanden/',
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
                    text: "p2000 Monitor Beta",
                    icon_url: 'https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/pager.png'
                }
            });
                }, 1000);
                
            }
            
        });
    
    }
}

module.exports = p2000Command;
