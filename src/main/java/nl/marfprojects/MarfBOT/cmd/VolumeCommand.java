package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import com.jagrosh.jdautilities.commandclient.Command.Category;

import nl.marfprojects.MarfBOT.Helpers;
import nl.marfprojects.MarfBOT.Ref;
import nl.marfprojects.MarfBOT.audio.MusicManager;

public class VolumeCommand extends Command {

    public VolumeCommand() {
        this.name = "volume";
        this.aliases = new String[] {"vol"};
        this.help = "choose a value between 0-150";
        this.guildOnly = true;
        this.ownerCommand = true;
        this.category = new Category("Music");
    }

    protected void execute(CommandEvent event) {
        String args[] = event.getArgs().split(" ");
        int volume;
        if (args.length == 0 || args[0].equalsIgnoreCase("")) {
            Helpers.sendEmbed("Volume", Ref.MarfBOT_PREFIX + "volume [number from 0 to 150]", event.getTextChannel(), Helpers.EmbedColor);
            return;
        }
        try {
            volume = Integer.parseInt(args[0]);
        } catch (NumberFormatException e) {
            return;
        }
        if (volume > -1 && volume < 151) {
            MusicManager.getManagerinstance().getPlayer(event.getGuild()).getAudioPlayer().setVolume(volume);
            Helpers.sendEmbed("Volume", "Volume has been set to " + String.valueOf(Math.round((double) volume / 1.5)) + "%", event.getTextChannel(), Helpers.EmbedColor);
        } else {
            Helpers.sendEmbed("Volume", Ref.MarfBOT_PREFIX + "volume [number from 0 to 150]", event.getTextChannel(), Helpers.EmbedColor);
        }
    }
}