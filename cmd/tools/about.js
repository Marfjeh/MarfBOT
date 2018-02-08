const   commando = require('discord.js-commando'),
        Discord  = require('discord.js'),
        MarfLib  = require('../../MarfBOT.js'), MarfBOT  = new MarfLib();

class AboutCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'tools',
            memberName: 'about',
            description: 'About MarfBOT'
        });
    }

    async run(message, args) {
        const embed = new Discord.RichEmbed()
            .setAuthor("MarfBOT²", "https://cdn.discordapp.com/app-icons/263948498351685632/3d0c6f8a4e22539f219de10dc6228090.png")
            .setColor(0x7289DA)
            .setDescription("```" + MarfBOT.logo() + "```")
            .setFooter("MarfBOT", null)
            .setThumbnail("https://cdn.discordapp.com/app-icons/263948498351685632/3d0c6f8a4e22539f219de10dc6228090.png")
            .addField("This is a field title, it can hold 256 characters", "This is a field value, it can hold 2048 characters.")
            .addField("Inline Field", "They can also be inline.", true)
            .addBlankField(true)
            .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

        message.channel.send({embed});
    }
}

module.exports = AboutCommand;
