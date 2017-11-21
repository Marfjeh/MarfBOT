package nl.marfprojects.MarfBOT.cmd;

import net.dv8tion.jda.core.events.message.guild.GuildMessageReceivedEvent;
import nl.marfprojects.MarfBOT.Kernel;
import nl.marfprojects.MarfBOT.Ref;

public class Game {
	public static void onExecution(GuildMessageReceivedEvent event, String[] command) {
		Kernel.changeGame(command[1]);
		event.getChannel().sendMessage("Success! Game set to: " + Ref.MarfBOT_GAME).queue();
	}
}
