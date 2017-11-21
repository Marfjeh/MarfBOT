package nl.marfprojects.MarfBOT.cmd;

import net.dv8tion.jda.core.events.message.guild.GuildMessageReceivedEvent;

public class Ping {
	public static void onExecution(GuildMessageReceivedEvent event, String[] command) {
		String msg = "Pong! it took `" + event.getJDA().getPing() + "` ms!";
		event.getChannel().sendMessage(msg).queue();
	}
}

