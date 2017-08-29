const commando = require('discord.js-commando'),
      request  = require("request");

class abuseipCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'abuseip',
            aliases: ['checkip', 'ip'],
            group: 'tools',
            memberName: 'abuseip',
            description: 'Check if the ip is stored on the AbuseIPDB database. useage: ]abuseip 0.0.0.0'
        });
    }

    async run(message, args) {
        url = "https://www.abuseipdb.com/check/" + args + "/json?key=MAzR5apRxvuaQnqF5bNwcWZmbxZAYwf4BHvjUl2h"
        
        request({
            url: url,
            json: true
        }, function (error, response, body) {
        
            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
                message.channel.send();
            }
        })
    }
}

module.exports = abuseipCommand;
