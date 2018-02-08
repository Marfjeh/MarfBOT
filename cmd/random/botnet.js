const commando = require('discord.js-commando');

module.exports =  class BotnetCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'botnet',
            group: 'random',
            memberName: 'botnet',
            description: 'a \\g\\ approved message.'
        });
    }

    async run(message, args) {
      message.channel.send("\n``` ____   ____ _______ _   _ ______ _______\n" +
      "|  _ \\ / __ \\__   __| \\ | |  ____|__   __|\n" +
      "| |_) | |  | | | |  |  \\| | |__     | |\n" +
      "|  _ <| |  | | | |  | . ` |  __|    | |\n" +
      "| |_) | |__| | | |  | |\\  | |____   | |\n" +
      "|____/ \\____/  |_|  |_| \\_|______|  |_|\n" +
      " / __ \\\n" +
      "| |  | |\n" +
      "| |  | |\n" +
      "| |__| |\n" +
      " \\____/_\n" +
      "|__   __|\n" +
      "   | |\n" +
      "   | |\n" +
      "   | |\n" +
      " _ |_|\n" +
      "| \\ | |\n" +
      "|  \\| |\n" +
      "| . ` |\n" +
      "| |\\  |\n" +
      "|_|_\\_|\n" +
      "|  ____|\n" +
      "| |__\n" +
      "|  __|\n" +
      "| |____\n" +
      "|______|\n" +
      "|__   __|\n" +
      "   | |\n" +
      "   | |\n" +
      "   | |\n" +
      "   |_|\n\n```");
    }
};