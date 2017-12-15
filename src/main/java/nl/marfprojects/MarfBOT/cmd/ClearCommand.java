package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;

import nl.marfprojects.MarfBOT.Helpers;
import nl.marfprojects.MarfBOT.audio.MusicManager;
import nl.marfprojects.MarfBOT.audio.MusicPlayer;

public class ClearCommand extends Command {

    public ClearCommand() {
        this.name = "clear";
        this.help = "clears the queue";
        this.guildOnly = true;
        this.category = new Category("Music");
    }

    @Override
    protected void execute(CommandEvent event) {
        MusicPlayer player = MusicManager.getManagerinstance().getPlayer(event.getGuild());
        if (player.getListener().getTracks().isEmpty()) {
            Helpers.sendEmbed("Error", "Queue is already empty!", event.getTextChannel(), Helpers.EmbedColorError);
            return;
        }
        player.getListener().getTracks().clear();
        Helpers.sendEmbed("Success", "Queue is now empty.", event.getTextChannel(), Helpers.EmbedColorInfo);
    }
}
