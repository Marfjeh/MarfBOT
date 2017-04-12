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
        
        var exec = require('child_process').exec;
        exec('rm /var/www/html/MarfBOT/weer.gif');
        exec('wget -O /var/www/html/MarfBOT/weer.gif http://api.buienradar.nl/image/1.0/RadarMapNL');
    
        
        //"url": "http://api.buienradar.nl/image/1.0/RadarMapNL?" + Math.random() + ".gif",
         setTimeout(function(){
        message.channel.sendMessage({
        "embed": {
                title: 'Buienradar',
                url: 'http://www.buienradar.nl/',
                "image": {
                "url": "http://fileserver.marfprojects.nl/MarfBOT/weer.gif?random=" + Math.random(),
                },
                footer: {
                    text: n + " " + time,
                    icon_url: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678120-calendar-clock-512.png'
                }
            }
        });
         }, 3000);
    }
}

module.exports = weerCommand;
