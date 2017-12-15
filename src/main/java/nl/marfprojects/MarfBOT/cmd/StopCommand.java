package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import com.jagrosh.jdautilities.commandclient.Command.Category;

import nl.marfprojects.MarfBOT.audio.MusicManager;
import nl.marfprojects.MarfBOT.audio.MusicPlayer;

public class StopCommand extends Command {

    public StopCommand() {
        this.name = "stop";
        this.help = "Stops the current song";
        this.category = new Category("Music");
    }
    
    protected void execute(CommandEvent event) {
        MusicPlayer player = MusicManager.getManagerinstance().getPlayer(event.getGuild());
        player.stopTrack();
    }
}