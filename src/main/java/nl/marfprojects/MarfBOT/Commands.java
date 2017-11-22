package nl.marfprojects.MarfBOT;

import net.dv8tion.jda.core.entities.User;
import net.dv8tion.jda.core.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.core.hooks.ListenerAdapter;
import nl.marfprojects.MarfBOT.cmd.*;

public class Commands extends ListenerAdapter{
	
	@Override
	public void onGuildMessageReceived(GuildMessageReceivedEvent event) {
		String[] command = event.getMessage().getContent().split(" ");
		String	 message = event.getMessage().getContent();
		
		Console.dlog("<" + event.getGuild().getName() + " | "+ event.getAuthor().getName() + "> " + message);
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
		
		if(message.contains("8===>") && Ref.MarfBOT_DickBot == true) { ///yay DickBot is alive again.
			event.getChannel().sendMessage("Yes! " + event.getAuthor().getAsMention() + " Please make me yours and put it in me!").queue();
		}
		
		//debugging commands
		if(command[0].equalsIgnoreCase(Ref.MarfBOT_PREFIX + "terminate") && event.getAuthor().getId().equals(Ref.MarfBOT_Owner)) {
				event.getChannel().sendMessage("Goodbye.").queue();
				System.exit(0);
		}
		
	}
	
	public void registerCommands() {
		
	}
	
}
