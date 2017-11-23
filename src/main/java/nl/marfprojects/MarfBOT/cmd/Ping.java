package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;

public class Ping extends Command{
	public Ping() {
		this.name = "ping";
        this.help = "Pong!";
	}
	protected void execute(CommandEvent event) {
		String msg = "Pong! it took `" + event.getJDA().getPing() + "` ms!";
		event.getChannel().sendMessage(msg).queue();
	}
}

