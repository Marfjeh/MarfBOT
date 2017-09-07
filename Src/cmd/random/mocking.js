const commando = require('discord.js-commando');

class mockingCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'mocking',
            aliases: ['spongebob', 'mock'],
            group: 'random',
            memberName: 'mocking',
            description: 'mocking spongebob meme'
        });
    }

    async run(message, args) {
        function mocking(text) {
            let returntext = "";
            for(const char of text) {
                returntext += (Math.random() > 0.4 ? char.toUpperCase() : char.toLowerCase());
            }
            return returntext;
        }
        message.delete();
         message.channel.send({
        "embed": {
                "image": {
                    "url": "https://uproxx.files.wordpress.com/2017/05/mocking-spongebob.jpg?quality=100&w=650",
                },
                footer: {
                    text:  message.author.username + ": " + mocking(args),
                }
            }
        });
    }
}

module.exports = mockingCommand;
