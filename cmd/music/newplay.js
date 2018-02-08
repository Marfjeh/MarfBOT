const   commando = require('discord.js-commando'),
    discord = require("discord.js"),
    ytdl = require('ytdl-core'),
    client = new discord.Client(),
    Marflib = require('../../MarfBOT.js'), MarfBOT = new Marflib();

MarfBOT.dlog("Setting up queue system...");
let queue = {};

function addQueue(message, url) {
    if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false,  queue[message.guild.id].songs = [];
    queue[message.guild.id].songs.push({url: url, title: "test", requester: message.author.username});
    message.channel.send(MarfBOT.embedMessage(MarfBOT.getColor(0), "Queue", `Added to the queue!`));
    //message.delete([20])
}

function playQueue() {}

function nextQueue() {}

function clearQueue() {}


module.exports = class PlayCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'newplay',
            group: 'music',
            memberName: 'newplay',
            description: 'MarfBOT\'s new music system. WIP and very expermental.',
            args: [
                {
                    key: 'option',
                    prompt: 'What option do you want to do? Supported options: `add` and `dump` ',
                    type: 'string'
                },
                {
                    key: 'url',
                    prompt: 'URL?',
                    type: 'string'
                }
            ]
        });
    }

    async run(message, {option, url}) {
        if(option === "add") {
            addQueue(message, url);
        } else if (option === "dump") {
            message.channel.send(JSON.stringify(queue));
        } else {
            message.channel.send(MarfBOT.embedMessage(MarfBOT.getColor(2), "Error", "Error dumped to console."));
        }
    }
};