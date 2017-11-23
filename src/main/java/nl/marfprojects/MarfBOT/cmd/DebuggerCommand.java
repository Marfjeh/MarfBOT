package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import nl.marfprojects.MarfBOT.Kernel;
import nl.marfprojects.MarfBOT.Ref;
import nl.marfprojects.MarfBOT.SoundSystem;

public class DebuggerCommand extends Command {
	public DebuggerCommand() {
		this.name = "debugger";
		this.aliases = new String[] {"debug", "db", "kernel", "info"};
		this.help = "MarfBOT's internal debugger and call kernel methods.";
		this.ownerCommand = true;
		this.arguments = "<method>, <optinal argument>";
	}
	
	protected void execute(CommandEvent event) {
		String[] args = event.getArgs().split("\"");
		event.getChannel().sendMessage("0: " + args[0] + "\n 1: " + args[1] + "\n 2: " + args[2]).queue();
	}
	
	private void callGC() {
		System.gc();
	}
	
}
