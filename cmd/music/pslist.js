/*
  _____  ______ _____  _____  ______ _____       _______ ______ _____
 |  __ \|  ____|  __ \|  __ \|  ____/ ____|   /\|__   __|  ____|  __ \
 | |  | | |__  | |__) | |__) | |__ | |       /  \  | |  | |__  | |  | |
 | |  | |  __| |  ___/|  _  /|  __|| |      / /\ \ | |  |  __| | |  | |
 | |__| | |____| |    | | \ \| |___| |____ / ____ \| |  | |____| |__| |
 |_____/|______|_|    |_|  \_\______\_____/_/    \_\_|  |______|_____/
 Need to rewrite it.
 */
const commando = require('discord.js-commando'),
      marfBOT = require("../../MarfBOT-Legacy.js"),
      fs = require("fs");

module.exports = class pslistCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pslist',
            group: 'music',
            memberName: 'pslist',
            description: 'Get a list of Sound effects!'
        });
    }

    async run(message, args) {
        let path = __dirname + "/../../assets/sounds/";
        let list = "";
        fs.readdir(path, function(err, items) {
        if (err == null)
        {
            for (var i=0; i<items.length; i++) {
            list = list + items[i].slice(0, -4) + " ";
            }
            message.channel.send("List of Sound effects\n ```" + list + "```");
        }
        else
        {
            message.channel.send("Unknown error! :(\nThere's a error reported to the console so marf will look for it!");
            marfBOT.elog(err);
        }
        
        });
      }

};
