const commando = require('discord.js-commando');
const Discord = require('discord.js');

class dmCommand extends commando.Command {
constructor(client) {
  super(client, {
      name: 'dm',
      group: 'tools',
      memberName: 'dm',
      description: 'dm to a user directly. usage: ]dm crazymarf text here.'
  });
}

async run(message, args) {
  console.log(args);
  var args2 = args.split(">");
  message.delete();

  const embed = new Discord.RichEmbed()
  .setColor(0x43B581)
  .setTitle(":information_source: " + message.author.username +", Your DM is sent!");
  message.channel.send({embed});
  
  console.log("debug: Hey! " + args2[0] + "> ,  have sent you a DM: " + args2[1]);

  const embed2 = new Discord.RichEmbed()
  .setColor(0x43B581)
  .addField("You got a DM from: " + message.author, "```" + args2[1] + "```");
  //message.guild.members.get(args2[0].substring(2)).send({embed2});
  message.channel.send({embed2});
}
}

module.exports = dmCommand;
