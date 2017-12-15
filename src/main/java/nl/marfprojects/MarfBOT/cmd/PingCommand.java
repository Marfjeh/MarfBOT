package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import com.jagrosh.jdautilities.commandclient.Command.Category;

public class PingCommand extends Command{
	public PingCommand() {
		this.name = "ping";
        this.help = "Pong!";
        this.category = new Category("Info");
	}
	protected void execute(CommandEvent event) {
		String msg = "Pong! it took `" + event.getJDA().getPing() + "` ms!";
		event.getChannel().sendMessage(msg).queue();
	}
}

