const commando = require('discord.js-commando');

module.exports = class g4ChanCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'gentoo',
            group: 'random',
            memberName: 'gentoo',
            description: 'A 4chan /g/ Simulator Also useful if you dont know what to shitpost about. (in beta tho, and made for fun.)'
        });
    }

    async run(message, args) {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1));
        }
        
        let threadNo = getRandomInt("10000000", "99999999");
        
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yy = today.getFullYear();
        let weekday = ["Sun" , "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = weekday[today.getDay()];
        let time = ('0' + today.getHours()).slice(-2) + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2);
        
        
        let title = "Anonymous " + dd +"/" + mm + "/"+ yy +"(" + day + ") " + time + " No." + threadNo;
        let thread_name = [
            "why aren't you using [name]?",
            "[name] ON SUICIDE WATCH",
            "/ptg/ - Private Tracker General",
            "NEET's actually tink professionals use [name]",
            ">he doesnt use [name]",
            "Why is this allowed [name]?",
            ">he falled for the [name] meme",
            ">his [name] will never look this good",
            ">he doesnt installed gentoo",
            "Is [name] a meme?",
            "[name] FINISHED & BANKRUPT.",
            ];
        let names = [
            "Nvidia",
            "Amd",
            "intel",
            "Android",
            "iOS",
            "Windows",
            "Mac Os",
            "Linux",
            "Gentoo",
            "Ryzen",
            "i7",
            "i5",
            "i3",
            "pentuim"
            ];
            
        
        let choosen = thread_name[Math.floor(Math.random()*thread_name.length)];
        let name_choose = names[Math.floor(Math.random()*names.length)];
        let message_string = choosen.replace("[name]", name_choose); 
        
        message.channel.send("```4chan /g/ Thread simulator```\n*" + title + "\n\n" + "**" + message_string + "**\n\n\n `disclaimer: This is made for fun, and this feature is in beta still.`");    
    }
};