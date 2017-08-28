const commando = require('discord.js-commando');
const Discord = require('discord.js');

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
		let messagecount = parseInt(args + 1);
       		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
	}
	else {
        const embed = new Discord.RichEmbed()
        .setColor(0xF04747)
        .addField(":warning: I'm sorry " + message.author.username +", I'm afraid I can't do that.", "You don't have the permission: `MANAGE_MESSAGES`.")
        .setFooter("In case of a error, contact a Server Administrator to give you the permission.");

      message.channel.send({embed});
	}
    }
}

module.exports = BugReportCommand;