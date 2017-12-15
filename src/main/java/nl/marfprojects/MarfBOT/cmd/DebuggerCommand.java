package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;

public class DebuggerCommand extends Command {
	public DebuggerCommand() {
		this.name = "debugger";
		this.aliases = new String[] {"debug", "db", "kernel", "info"};
		this.help = "MarfBOT's internal debugger and call kernel methods.";
		this.ownerCommand = true;
		this.arguments = "<method>, <optinal argument>";
	}
	
	protected void execute(CommandEvent event) {
		callGC();
	}
	
	private void callGC() {
		System.gc();
	}
	
}
