package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import net.dv8tion.jda.core.EmbedBuilder;
import nl.marfprojects.MarfBOT.Helpers;
import nl.marfprojects.MarfBOT.audio.MusicManager;
import nl.marfprojects.MarfBOT.audio.MusicPlayer;

public class ClearCommand extends Command {

    public ClearCommand() {
        this.name = "clear";
        this.help = "clears the queue";
        this.guildOnly = true;
    }

    @Override
    protected void execute(CommandEvent event) {
        MusicPlayer player = MusicManager.getManagerinstance().getPlayer(event.getGuild());
        if (player.getListener().getTracks().isEmpty()) {
            EmbedBuilder eb = new EmbedBuilder();
            eb.setColor(Helpers.EmbedColor);
            eb.setTitle("Error");
            eb.setDescription("Queue is already empty.");
            eb.setFooter("MarfBOT", null);
            event.getTextChannel().sendMessage(eb.build()).queue();
            return;
        }
        player.getListener().getTracks().clear();
        EmbedBuilder eb = new EmbedBuilder();
        eb.setColor(Helpers.EmbedColor);
        eb.setTitle("Success");
        eb.setDescription("Cleared the queue.");
        eb.setFooter("MarfBOT", null);
        event.getTextChannel().sendMessage(eb.build()).queue();
    }
}
