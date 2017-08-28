const commando = require('discord.js-commando');

class BotnetCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'macfag',
            group: 'random',
            memberName: 'macfag',
            description: 'MACFAGS REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
        });
    }

    async run(message, args) {
      message.channel.send(
 "```\n __  __          _____ ______      _____ \n" +
 "|  \\/  |   /\\   / ____|  ____/\\   / ____| \n" +
 "| \\  / |  /  \\ | |    | |__ /  \\ | |  __  \n" +
 "| |\\/| | / /\\ \\| |    |  __/ /\\ \\| | |_ | \n" +
 "| |  | |/ ____ \\ |____| | / ____ \\ |__| | \n" +
 "|_|  |_/_/    \\_\\_____|_|/_/    \\_\\_____| \n```");
                                          
    }
}

module.exports = BotnetCommand;
