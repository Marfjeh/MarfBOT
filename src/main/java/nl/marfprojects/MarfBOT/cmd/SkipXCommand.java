package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import com.jagrosh.jdautilities.commandclient.Command.Category;

import nl.marfprojects.MarfBOT.Ref;
import nl.marfprojects.MarfBOT.audio.MusicManager;
import nl.marfprojects.MarfBOT.audio.MusicPlayer;


public class SkipXCommand extends Command {
    public SkipXCommand() {
        this.name = "time";
        this.help = "skip to a sercaint part inside of a song";
        this.category = new Category("Music");
    }

    MusicManager manager = MusicManager.getManagerinstance();

    @Override
    protected void execute(CommandEvent event) {
        String[] args = event.getArgs().replaceFirst(":", " ").split("\\s+");
        int seconds;
        MusicPlayer player = manager.getPlayer(event.getGuild());
        if (args[0] == null || args[0].equalsIgnoreCase("")) args[0] = "0";
        if (args.length < 2) seconds = 0; else try {
            Integer.parseInt(args[0]);
            seconds = Integer.parseInt(args[1]);
        } catch (NumberFormatException e) {
            event.reply("Usage: " + Ref.MarfBOT_PREFIX + this.name + " 1:10");
            e.addSuppressed(e.getCause());
            return;
        }
        player.getAudioPlayer().getPlayingTrack().setPosition(Integer.parseInt(args[0]) * 60000 + seconds  * 1000);
    }
}
