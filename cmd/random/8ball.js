const commando = require('discord.js-commando');

module.exports = class ballCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'random',
            memberName: '8ball',
            description: '8ball'
        });
    }

    async run(message, args) {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1));
        }

        let answares = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy, try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Don\'t count on it',
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Very doubtful'
        ];

        message.channel.send("8Ball says: " + answares[Math.floor(Math.random()*answares.length)]);
    }
};
