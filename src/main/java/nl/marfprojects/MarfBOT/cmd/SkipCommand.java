package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import com.sedmelluq.discord.lavaplayer.track.AudioTrack;
import net.dv8tion.jda.core.EmbedBuilder;
import nl.marfprojects.MarfBOT.Helpers;
import nl.marfprojects.MarfBOT.audio.MusicManager;
import nl.marfprojects.MarfBOT.audio.MusicPlayer;

import java.util.concurrent.BlockingQueue;

public class SkipCommand extends Command {

    MusicManager manager = MusicManager.getManagerinstance();

    public SkipCommand() {
        this.name = "skip";
        this.help = "skip a song";
    }

    @Override
    protected void execute(CommandEvent event) {
        MusicPlayer player = manager.getPlayer(event.getGuild());
        AudioTrack tracknp = player.getAudioPlayer().getPlayingTrack();
        EmbedBuilder eb = new EmbedBuilder();
        String[] args = event.getArgs().split("\\s+");
        BlockingQueue<AudioTrack> audioTracks = player.getListener().getTracks();
        int i = 1;
        if (args.length > 0) {
            if (!args[0].equalsIgnoreCase("")) {
                try {
                    i = Integer.parseInt(args[0]);
                    if (i > 50 || i < 1) {
                        event.reply("... dude how hard is it to pick a number from 1 to 50");
                        return;
                    }
                } catch (NumberFormatException e) {
                    e.addSuppressed(e);
                    event.reply("... dude how hard is it to pick a number from 1 to 50");
                }
            }
        }
        AudioTrack nextSong = null;
        int c = 0;
        for(AudioTrack track : audioTracks) {
            if (i != c) {
                nextSong = track;
                player.skipTrack();
                c++;
            }
        }
            eb.setTitle("Skipped");
            eb.setColor(Helpers.EmbedColor);
        if (nextSong != null)
            eb.setDescription("Skipped: " + tracknp.getInfo().title + "\n" + "Now playing: " + nextSong.getInfo().title);
        else
            eb.setDescription("Skipped: " + tracknp.getInfo().title + "\n" + "No next song.");
        	eb.setFooter("MarfBOT", null);
        event.reply(eb.build());

    }
}
