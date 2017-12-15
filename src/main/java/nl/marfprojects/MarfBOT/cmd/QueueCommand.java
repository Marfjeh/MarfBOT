package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import com.sedmelluq.discord.lavaplayer.track.AudioTrack;
import net.dv8tion.jda.core.EmbedBuilder;
import net.dv8tion.jda.core.entities.Guild;
import nl.marfprojects.MarfBOT.Helpers;
import nl.marfprojects.MarfBOT.audio.MusicManager;
import nl.marfprojects.MarfBOT.audio.MusicPlayer;
import java.util.concurrent.BlockingQueue;

public class QueueCommand extends Command{
    MusicManager manager = MusicManager.getManagerinstance();

    public QueueCommand() {
        this.name = "queue";
        this.help = "shows all songs in the queue";
        this.category = new Category("Music");
        this.guildOnly = true;
    }

    @Override
    protected void execute(CommandEvent event) {
        Guild guild = event.getGuild();
        MusicPlayer player = manager.getPlayer(guild);
        System.out.println(player.getListener().getTrackSize());
        if (player.getListener().getTrackSize() == 0 && player.getAudioPlayer().getPlayingTrack() == null) return;
        BlockingQueue<AudioTrack> tracks = player.getListener().getTracks();
        EmbedBuilder eb = new EmbedBuilder();
        eb.setColor(Helpers.EmbedColor);
        eb.setTitle("Queue");
        StringBuilder sb = new StringBuilder();
        int i = 0;
        if (player.getAudioPlayer().getPlayingTrack() != null) {
            sb.append(String.valueOf("[" + i + "](" + player.getAudioPlayer().getPlayingTrack().getInfo().uri + ") " + player.getAudioPlayer().getPlayingTrack().getInfo().title + " `" + Helpers.getDurationBreakdown(player.getAudioPlayer().getPlayingTrack().getInfo().length)+"`"));
        }
        for (AudioTrack track : tracks) {
            i++;
            sb.append(String.valueOf("\n[" + i + "](" + track.getInfo().uri + ") " + track.getInfo().title + " `" + Helpers.getDurationBreakdown(track.getInfo().length) + "`"));
        }
        eb.setDescription(sb);
        eb.setFooter("MarfBOT", null);
        event.getTextChannel().sendMessage(eb.build()).queue();
    }
}
