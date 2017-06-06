const commando = require('discord.js-commando');

class DumpertCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dumpert',
            group: 'tools',
            memberName: 'dumpert',
            description: 'Laaste 20 dumpert uploads'
        });
    }

    async run(message, args) {
       var parser = require('rss-parser');
       
        var dumperreeten = [
        'Goede Techniek, 4 Reeten! :reet::reet::reet::reet:', 
        'VVS 1 reet! :reet:', 
        'Dikke billen 5 Reeten! :reet::reet::reet::reet::reet:',
        'Pranks, 0 reeten.'
        ];
        var nieuwsberichten_title = "";        
        var nieuwsberichten_text = [];
        var nieuwsberichten_url = [];

        message.reply("Moment. Even Joris Terugjorissen :reet:");
        
        parser.parseURL('http://www.dumpert.nl/rss.xml.php', function(err, parsed) {
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
                title: "Dumpert",
                description: "laaste 10-20 dumpert uploads. (2/2)",
                url: 'http://www.dumpert.nl/',
                fields: [
                {
                    name: nieuwsberichten_text[10],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[10] + ')'
                },
                {
                    name: nieuwsberichten_text[11],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[11] + ')'
                },
                {
                    name: nieuwsberichten_text[12],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[12] + ')'
                },
                {
                    name: nieuwsberichten_text[13],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[13] + ')'
                },
                {
                    name: nieuwsberichten_text[14],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[14] + ')'
                },
                {
                    name: nieuwsberichten_text[15],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[15] + ')'
                },
                {
                    name: nieuwsberichten_text[16],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[16] + ')'
                },
                {
                    name: nieuwsberichten_text[17],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[17] + ')'
                },
                {
                    name: nieuwsberichten_text[18],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[18] + ')'
                },
                {
                    name: nieuwsberichten_text[19],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[19] + ')'
                }
            ],
                footer: {
                    text: "5 Reeten!",
                    icon_url: 'http://www.dumpert.nl/favicon-152.png'
                }
            });
                }, 1000);
                
            }
            else {
                setTimeout(function(){
               message.channel.sendEmbed({
                title: "Dumpert",
                description: "laaste 10 dumpert uploads. (1/2) typ >dumpert 2 voor meer.",
                url: 'http://www.dumpert.nl/',
                fields: [
                {
                    name: nieuwsberichten_text[0],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[0] + ')'
                },
                {
                    name: nieuwsberichten_text[1],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[1] + ')'
                },
                {
                    name: nieuwsberichten_text[2],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[2] + ')'
                },
                {
                    name: nieuwsberichten_text[3],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[3] + ')'
                },
                {
                    name: nieuwsberichten_text[4],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[4] + ')'
                },
                {
                    name: nieuwsberichten_text[5],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[5] + ')'
                },
                {
                    name: nieuwsberichten_text[6],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[6] + ')'
                },
                {
                    name: nieuwsberichten_text[7],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[7] + ')'
                },
                {
                    name: nieuwsberichten_text[8],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[8] + ')'
                },
                {
                    name: nieuwsberichten_text[9],
                    value: '[Bekijk Dumpert upload](' + nieuwsberichten_url[9] + ')'
                },
            ],
                footer: {
                    text: "5 Reeten!",
                    icon_url: 'http://www.dumpert.nl/favicon-152.png'
                }
            });
                }, 1000);
                
            }
            
        });
    
    }
}

module.exports = DumpertCommand;
