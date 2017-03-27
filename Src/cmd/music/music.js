const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'music',
            group: 'music',
            memberName: 'music',
            description: 'info about the music system.'
        });
    }

    async run(message, args) {
        message.author.sendMessage({
        "embed": {
                title: 'MarfBOT Music System',
                description: "This is how ever still a alpha version. because it is using a external libaray and it cannot work with the existing command system it has it own prefix for now. This can however change.",
                 fields: [
                {
                    name:  "play a youtube link",
                    value: '<play [youtube url]'
                },
                {
                    name: "Volume",
                    value: "<volume [0-100]"
                },
                {
                    name: "Codex infromation",
                    value: "Opus-Music"
                }
            ],
            }
        });
      message.reply("Sent you a DM with information.");
    }
}

module.exports = DiceRollCommand;
