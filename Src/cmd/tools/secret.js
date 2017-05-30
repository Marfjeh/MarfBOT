const commando = require('discord.js-commando'),
      marfBOT  = require("../../MarfBOT.js");

class BugReportCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 's',
            group: 'tools',
            memberName: 'secret',
            description: 'Delete the message after 10 seconds.'
        });
    }

    async run(message, args) {
        message.delete(10000);
        marfBOT.nlog("removed a message: " + args);
        
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