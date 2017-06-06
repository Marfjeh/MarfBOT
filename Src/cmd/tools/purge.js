const commando = require('discord.js-commando');

class BugReportCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            group: 'tools',
            memberName: 'purge',
            description: 'purge amound of messages.'
        });
    }

    async run(message, args) {
        message.channel.sendMessage("Error dumped in console.");
        message.delete();
        message.delete();
        message.delete();
        message.delete();
        message.delete();
        message.delete();
        message.delete();
        message.delete();
        message.delete();
    }
}

module.exports = BugReportCommand;

/*

                case "purge":
                    int amount = Integer.parseInt(ms[1]) + 1;
                    if (amount > 1 && amount < 101)
                        event.getChannel().getHistory().retrievePast(amount)
                                .queue(q -> event.getTextChannel().deleteMessages(q).queue());
                    else event.getChannel().sendMessage("Invalid argument!").queue();
                    break;
                    */