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
      message.reply("```" + message.author + "```");
      var sys = require('sys')

var exec = require('child_process').exec;

var child;

// executes `pwd`

child = exec("pwd", function (error, stdout, stderr) {

   message.reply('stdout: ' + stdout);

   message.reply('stderr: ' + stderr);

  if (error !== null) {

     message.reply('exec error: ' + error);

  }

});

// or more concisely

var sys = require('sys')

var exec = require('child_process').exec;

function puts(error, stdout, stderr) { sys.puts(stdout) }

exec("ls -la", puts);
    }
}

module.exports = shellCommand;
