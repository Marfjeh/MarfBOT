package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import nl.marfprojects.MarfBOT.SoundSystem;

public class Play extends Command{
	public Play() {
		this.name = "play";
		this.help = "play a youtube link or direct .mp3 url (icecast supported)";
		this.aliases = new String[] {"live", "youtube", "soundhound"};
		this.arguments = "<url/name>";
	}
	
	protected void execute(CommandEvent event) {
		//TODO
	}
}
