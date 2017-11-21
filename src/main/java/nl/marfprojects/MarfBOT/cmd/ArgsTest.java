package nl.marfprojects.MarfBOT.cmd;

import net.dv8tion.jda.core.events.message.guild.GuildMessageReceivedEvent;

public class ArgsTest {
	public static void onExecution(GuildMessageReceivedEvent event, String[] command) {
		event.getChannel().sendMessage("Aguments! Arg0: " + command[0] + "\nArg1: " + command[1] + "\nArg2: " + command[2]).queue();
	}
}
