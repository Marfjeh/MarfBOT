package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;

import nl.marfprojects.MarfBOT.Console;

public class GC extends Command{

	public GC() {
		this.name = "GC";
		this.help = "Run System.GC();";
	}
	protected void execute(CommandEvent event) {
		System.gc(); //JAVA XDDDDD
		Console.wlog("Runned Garbage collection.");
	}
}
