package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;

public class PsCommand extends Command{
	
	public PsCommand() {
		this.name = "ps";
		this.aliases = new String[] {"psl" , "pslist"};
		this.category = new Category("Music");
		this.help = "play a Sound effect! type ]ps list or ]pslist for a list of sound effects";
		this.arguments = "<sound>";
	}
	
	protected void execute(CommandEvent event) {
		//TODO
	}

}
