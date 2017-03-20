const commando = require('discord.js-commando');

class amberCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'amber',
            group: 'tools',
            memberName: 'amber',
            description: 'Get the latest Amber alert in the netherlands if there one is'
        });
    }

    async run(message, args) {
        var date = new Date();
        var n = date.toDateString();
        var time = date.toLocaleTimeString();
        
        message.channel.sendMessage({
        "embed": {
                title: ':warning: AMBER ALERT! :warning:',
                url: 'https://www.amberalert.nl/',
                "image": {
                "url": "http://tmp.amberalert.nl/imagealert/Default.aspx?lang=nl?random=" + Math.random(),
                },
                footer: {
                    text: n + " " + time,
                    icon_url: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678120-calendar-clock-512.png'
                }
            }
        });
    }
}

module.exports = amberCommand;
