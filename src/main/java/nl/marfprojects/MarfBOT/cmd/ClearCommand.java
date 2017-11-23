package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import net.dv8tion.jda.core.EmbedBuilder;
import nl.marfprojects.MarfBOT.Helpers;
import nl.marfprojects.MarfBOT.audio.MusicManager;
import nl.marfprojects.MarfBOT.audio.MusicPlayer;

import java.text.SimpleDateFormat;
import java.util.Date;

public class ClearCommand extends Command {

    public ClearCommand() {
        this.name = "clear";
        this.help = "clears the queue";
        this.guildOnly = true;
    }

    @Override
    protected void execute(CommandEvent event) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("MMM dd,yyyy HH:mm:ss");
        Date date = new Date(System.currentTimeMillis());
        MusicPlayer player = MusicManager.getManagerinstance().getPlayer(event.getGuild());
        if (player.getListener().getTracks().isEmpty()) {
            EmbedBuilder eb = new EmbedBuilder();
            eb.setColor(Helpers.EmbedColor);
            eb.setTitle("But...");
            eb.setDescription("**There are no songs to remove.**");
            eb.setFooter("ToxicMushroom | " + simpleDateFormat.format(date), "https://i.imgur.com/1wj6Jlr.png");
            event.getTextChannel().sendMessage(eb.build()).queue();
            return;
        }
        player.getListener().getTracks().clear();
        EmbedBuilder eb = new EmbedBuilder();
        eb.setColor(Helpers.EmbedColor);
        eb.setTitle("Cleared");
        eb.setDescription("**I cleared the queue i hope that you aren't mad at me :(. i'm a __good__ pet.**");
        eb.setFooter("MarfBOT", null);
        event.getTextChannel().sendMessage(eb.build()).queue();
    }
}
