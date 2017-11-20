package nl.marfprojects.MarfBOT;

import java.awt.Color;

import net.dv8tion.jda.core.EmbedBuilder;
import net.dv8tion.jda.core.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.core.hooks.ListenerAdapter;

public class Commands extends ListenerAdapter{
	
	@Override //Why do i have a bad feeling about this?
	public void onGuildMessageReceived(GuildMessageReceivedEvent event) {
		String[] command = event.getMessage().getContent().split(" ");
		//String message = event.getMessage().getContent();
		
		//if(command[0].startsWith("]"))
		//	return; //TODO: MarfBOT it's own parser
		
		//Test commands for now, i want it to work.
		if(command[0].equalsIgnoreCase("]ping")) {
			String msg = "Pong! it took `" + event.getJDA().getPing() + "` ms!";
			event.getChannel().sendMessage(msg).queue();
		}
		if(command[0].equalsIgnoreCase(Ref.MarfBOT_PREFIX + "about")) {
			String msg = "MarfBOT:Java\nVersion 0.0.1\nby: Crazymarf#0020";
			event.getChannel().sendMessage(msg).queue();
		}
		
	}
	
}
