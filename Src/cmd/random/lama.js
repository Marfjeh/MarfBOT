const commando = require('discord.js-commando');

class BotnetCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lama',
            group: 'random',
            memberName: 'lama',
            description: 'Drama drama grote lama (dutch)'
        });
    }

    async run(message, args) {
      message.channel.send(
 "```                                 .S8%   \n"+
"  .  . .  .  . .  .  . .  .  . .S @ ;  .\n"+
"   .       .       .       . SX:S..888:\n"+ 
"     .  .    .  .    .  .   SX       ..t\n"+
" .       .       .       . :8.    :;@@.t\n"+
"   .  .    .  .    .  .    S.    S@t::88\n"+
"  .    .  .    .  .    .  ;t     :%   ..\n"+
"    .       .       .    .@X.    .:     \n"+
" .@tt@ t8%% @@@.;88%:. . .@.     t8  .  \n"+
" ;S        .      .XX %@8%X     .@8.   .\n"+
"%S                     .;;.      @X  .  \n"+
";.       drama         .:.       Xt     \n"+
"S          drama                 X .  . \n"+
"8                               ::  .   \n"+
"%8    grote llama              :@:    . \n"+
";:                            :8.  .    \n"+
"@@                         :S88:  .  .  \n"+
"t;.    @t:SS8;;.         8;%..  .      .\n"+
"XX     X   ..%S8:t..     8 .       .    \n"+
"8t...X:  .     ..@      SX   .  .    .  \n"+
"@8:8.% .   . .   88 8t;S8. .      .   . \n"+
". ; ;%          . ..@8;t.     . .   .   \n"+
" t;@8S . .  .      :%888    .     .    .\n"+
" : 8.S:    .  . . @8S:8@ .    .      .  \n"+
"  8;X@SX .        %8t8S.  .     .  .    \n"+
"  :8; Xt    .  . . X8; S.  . .   .   .  \n"+
"    ;:   .   .     ;8 :Xt.     .       .```");
                                          
    }
}

module.exports = BotnetCommand;
