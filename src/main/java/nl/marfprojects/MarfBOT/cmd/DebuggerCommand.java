package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import com.jagrosh.jdautilities.commandclient.Command.Category;

import nl.marfprojects.MarfBOT.Helpers;
import nl.marfprojects.MarfBOT.Kernel;
import nl.marfprojects.MarfBOT.Ref;

public class DebuggerCommand extends Command {
	public DebuggerCommand() {
		this.name = "debugger";
		this.category = new Category("Debugging");
		this.aliases = new String[] {"debug", "db", "kernel", "info"};
		this.help = "MarfBOT's internal debugger and call kernel methods.";
		this.ownerCommand = true;
		this.arguments = "<method>, <optinal argument>";
	}
	
	protected void execute(CommandEvent event) {
		String[] args = event.getArgs().split(" ");
	}
	private void callGC() {
		System.gc();
	}
	
}
