package nl.marfprojects.MarfBOT;

import net.dv8tion.jda.core.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.core.hooks.ListenerAdapter;

public class Leagcy_Commands extends ListenerAdapter{
	
	@Override
	public void onGuildMessageReceived(GuildMessageReceivedEvent event) {
		//String[] command = event.getMessage().getContent().split(" ");
		String	 message = event.getMessage().getContent();
		
		if (Ref.MarfBOT_logChat)
		Console.dlog("<" + event.getGuild().getName() + " | "+ event.getAuthor().getName() + "> " + message);
	
		//place for teh eastereggs :P
		
		if(message.contains("8===>") && Ref.MarfBOT_DickBot == true) { ///yay DickBot is alive again.
			event.getChannel().sendMessage("Yes! " + event.getAuthor().getAsMention() + " Please make me yours and put it in me!").queue();
		}
		
	}
}
