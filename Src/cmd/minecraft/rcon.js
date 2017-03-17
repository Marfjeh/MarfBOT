const commando = require('discord.js-commando');
const bot = new commando.Client();

class RconCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'rcon',
            group: 'minecraft',
            memberName: 'rcon',
            description: 'Make a Rcon connection to my minecraft server!'
        });
    }

    async run(message, args) {
      if (bot.CommandoClient.isOwner(message.author) == true)
      {
        const Rcon = require('modern-rcon');
        const rcon = new Rcon('localhost', 'lel');

        rcon.connect().then(() => {
          return rcon.send(args); // That's a command for Minecraft
        }).then(res => {
          message.channel.sendMessage("[Command] ```/" + args + "``` [Rcon Server Response] ```" + res + "```");
        }).then(() => {
          return rcon.disconnect();
        });
        }
        else {
          message.reply("Permission Error.");
        }
      }
    }

module.exports = RconCommand;
