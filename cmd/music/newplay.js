const   commando = require('discord.js-commando'),
    discord = require("discord.js"),
    ytdl = require('ytdl-core'),
    client = new discord.Client(),
    Marflib = require('../../MarfBOT.js'), MarfBOT = new Marflib();

MarfBOT.dlog("Setting up queue system...");
let queue = {};

function addQueue(message) { //stole from nillchan need to cleanup.
    let url = message.content.split(' ')[1];
    if (url == '' || url === undefined) return message.channel.send(`You must add a url`);
    ytdl.getInfo(url, (err, info) => {
        if(err) return message.channel.send('Invalid YouTube Link: ' + err);
        if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
        queue[message.guild.id].songs.push({url: url, title: info.title, requester: message.author.username});
        message.channel.send(`added **${info.title}** to the queue`);
        message.delete([20])
    });
}

class PlayCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'newplay',
            group: 'music',
            aliases: ['newlive', 'newps'],
            memberName: 'newplay',
            description: 'MarfBOT\'s new music system. WIP and very expermental.'
        });
    }
    
    async run(message, args) {
       //TODO
    }
}

module.exports = PlayCommand;
