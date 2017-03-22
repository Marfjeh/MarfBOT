const commando = require('discord.js-commando');

class shellCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'shell',
            group: 'minecraft',
            memberName: 'shell',
            description: 'Runs a Shell command!'
        });
    }
    
    async run(message, args) {
    
    if (message.author == "<@218310787289186304>")
    {
        
        var exec = require('child_process').exec;
        var coffeeProcess = exec('tail -f /home/marf/Cloud9/mc/logs/latest.log ---disable-inotify');
    
        coffeeProcess.stdout.on('data', function(data) {
            message.channel.sendMessage(data);
        });
    }
    else
    {
        message.reply("Sorry, only @Crazymarf#0020 can do it. because this command is still in beta mode and may be insecure.");
    }
   
    }
    
}

module.exports = shellCommand;
