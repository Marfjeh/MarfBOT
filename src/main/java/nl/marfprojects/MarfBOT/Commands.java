package nl.marfprojects.MarfBOT;

import java.awt.Color;
import net.dv8tion.jda.core.EmbedBuilder;
import net.dv8tion.jda.core.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.core.hooks.ListenerAdapter;
import nl.marfprojects.MarfBOT.cmd.*;

public class Commands extends ListenerAdapter{
	
	@Override
	public void onGuildMessageReceived(GuildMessageReceivedEvent event) {
		String[] command = event.getMessage().getContent().split(" ");
		//String message = event.getMessage().getContent();
		
		//if(command[0].startsWith("]"))
		//	return; //TODO: MarfBOT it's own parser
		
		//A reaaaaally proof of concept marfbot's it's own framework like thing. yea i'm bad at naming.
		
		if(command[0].equalsIgnoreCase(Ref.MarfBOT_PREFIX + "ping")) {
			Ping.onExecution(event, command);
		}
		if(command[0].equalsIgnoreCase(Ref.MarfBOT_PREFIX + "about")) {
			About.onExecution(event);			
		}
		if(command[0].equalsIgnoreCase(Ref.MarfBOT_PREFIX + "argtest")) {
			ArgsTest.onExecution(event, command);
		}
		if(command[0].equalsIgnoreCase(Ref.MarfBOT_PREFIX + "game")) {
			Game.onExecution(event, command);
		}
		
	}
	
}
