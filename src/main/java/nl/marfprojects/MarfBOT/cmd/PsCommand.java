package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;

import nl.marfprojects.MarfBOT.SoundSystem;

public class PsCommand extends Command{
	
	public PsCommand() {
		this.name = "ps";
		this.aliases = new String[] {"psl" , "pslist"};
		this.help = "play a Sound effect! type ]ps list or ]pslist for a list of sound effects";
		this.arguments = "<sound>";
	}
	
	protected void execute(CommandEvent event) {
		//TODO
	}

}
