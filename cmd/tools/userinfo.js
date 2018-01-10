const commando = require('discord.js-commando'),
      MarfBOT = require("../../MarfBOT.js");

class UserInfoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'userinfo',
            group: 'tools',
            memberName: 'userinfo',
            description: 'Get info about your user.'
        });
    }

    async run(message, args) {  
        
    }
}

module.exports = UserInfoCommand;
