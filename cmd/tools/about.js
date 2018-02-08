const   commando = require('discord.js-commando'),
        Discord  = require('discord.js'),
        MarfLib  = require('../../MarfBOT.js'), MarfBOT  = new MarfLib(),
        os = require('os'),
        kernel = require('../../kernel.js');

function getFreemem() {
    let memused = process.memoryUsage().heapTotal + process.memoryUsage().heapUsed + process.memoryUsage().external;
    return(process.memoryUsage().rss - memused);
}

module.exports =  class AboutCommand extends commando.Command {
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
            .setColor(0x7289DA)
            .setDescription("```" + MarfBOT.logo() + "```")
            .setFooter("MarfBOT", null)
            .addField("Version", "2.0", true)
            .addField("Type", "Beta", true)
            .addField("MarfBOT Uptime", Math.round(Math.floor(process.uptime()) / 60 / 60 / 24) + " Days", true)
            .addBlankField(false)
            .addField("OS", os.type(), true)
            .addField("OS version", os.release() , true)
            .addField("OS Arch", os.arch(), true)
            .addField("Allocated memory", Math.round(process.memoryUsage().rss / 1000 / 1000) + " MB", true)
            .addField("Used Memory", Math.round(process.memoryUsage().heapUsed / 1000 / 1000) + " MB", true)
            .addField("Free Memory", Math.round(getFreemem() / 1000 / 1000) + " MB", true)
            .addBlankField(false)
            .addField("Total servers", kernel.Client.guilds.size , true)
            .addField("Total users", kernel.Client.users.size , true)
            .addField("Invite me to your discord server (including the permissions)", "<https://discordapp.com/oauth2/authorize?client_id=263948498351685632&scope=bot&permissions=3333120>", false);

        message.channel.send({embed});
    }
};
