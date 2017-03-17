const commando = require('discord.js-commando');
const bot = new commando.Client();
clog('info', "MarfBot Starting...");

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('minecraft', 'Minecraft');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/cmd");

bot.on('ready', () =>{
  clog('info', 'MarfBot is running, and online!');
  bot.user.setGame("BOTNET Simulator");
});

bot.on('message' , message =>{
  var roll = Math.floor(Math.random() * 2000) + 1;


  if (message.content.startsWith(">Status")) {
    var args = message.content.substring(8);
    bot.user.setGame(args.toString());
    clog('Command_Execute', "Set Status to: " + args)
    message.reply("Set Status to: " + args);
  }

 if (roll == 2000)
 {
   message.channel.sendMessage("TRIGGERED!");
 }

});




bot.login('MjYzOTQ4NDk4MzUxNjg1NjMy.C5X_wg.Ec-c9tT8gHzBzJRNyo_bPkTUhI0');


function clog (type, message)
{
  const date = new Date();
  console.log("["+type+" | " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + message);
}
