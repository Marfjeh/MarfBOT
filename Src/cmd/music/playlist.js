const   commando = require('discord.js-commando'),
        marfBOT = require("../../MarfBOT.js"),
        discord = require("discord.js"),
        ytdl = require('ytdl-core'),
        client = new discord.Client();
        
var     urlist = [
        "https://www.youtube.com/watch?v=2boJLX0iVp8",
        "https://www.youtube.com/watch?v=rxokUkJ3h_0",
        "https://www.youtube.com/watch?v=qk_LCRR00cM"
        ],
        counter = 0;
        
class PlayCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'playlist',
            group: 'music',
            memberName: 'playlist',
            description: 'play a saved playlist on the localsystem. Still in alpha.'
        });
    }

    async run(message, args) {
        playmusic(urlist[counter]);
        
        function playmusic(url) {
           marfBOT.dlog("Music Array: playing " + args + " counter: " + counter);
            const streamOptions = { seek: 0, volume: 1 };
            message.member.voiceChannel.join()
            .then(connection => {
                const stream = ytdl(url, {filter : 'audioonly', videoDefinition: 'high'});
                const dispatcher = connection.playStream(stream, streamOptions);
                marfBOT.clog("Music", "Array Playing: " + url);
                dispatcher.on('end', () => musicended());
            })
            .catch(marfBOT.elog);
        }
        function musicended() {
                counter ++;
                playmusic(urlist[counter]);
        }
    }
}

module.exports = PlayCommand;
