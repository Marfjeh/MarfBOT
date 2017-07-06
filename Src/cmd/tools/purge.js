const commando = require('discord.js-commando');

class BugReportCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            group: 'tools',
            memberName: 'purge',
            description: 'purge amound of messages. (Needs to be manualy enabled)'
        });
    }

    async run(message, args) {
	if (message.member.hasPermission('MANAGE_MESSAGES') === true) {
		let messagecount = parseInt(args);
       		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
	}
	else {
		message.reply("WARNING, You don't have the permission (`MANAGE_MESSAGES`) to manage messages, so you can't run this command.");
	}
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
