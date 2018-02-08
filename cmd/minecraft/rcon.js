const commando = require('discord.js-commando');

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
      if (args != null)
      {
        const Rcon = require('modern-rcon');
        const rcon = new Rcon('localhost', 'lel');

        rcon.connect().then(() => {
          return rcon.send(args);
        }).then(res => {
          message.channel.send("[Command] ```/" + args + "``` [Rcon Server Response] ```" + res + "```");
        }).then(() => {
          return rcon.disconnect();
        });
        }
        else {
          message.reply("Usage: !rcon (command)");
        }
      }
    }

module.exports = RconCommand;