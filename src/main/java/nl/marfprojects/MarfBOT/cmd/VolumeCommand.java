package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;

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
    }

    protected void execute(CommandEvent event) {
        String args[] = event.getArgs().split(" ");
        int volume;
        if (args.length == 0 || args[0].equalsIgnoreCase("")) {
            Helpers.DefaultEmbed("Volume", Ref.MarfBOT_PREFIX + "volume [number from 0 to 150]", event.getTextChannel());
            return;
        }
        try {
            volume = Integer.parseInt(args[0]);
        } catch (NumberFormatException e) {
            return;
        }
        if (volume > -1 && volume < 151) {
            MusicManager.getManagerinstance().getPlayer(event.getGuild()).getAudioPlayer().setVolume(volume);
            Helpers.DefaultEmbed("Volume", "Volume has been set to " + String.valueOf(Math.round((double) volume / 1.5)) + "%", event.getTextChannel());
        } else {
            Helpers.DefaultEmbed("Volume", Ref.MarfBOT_PREFIX + "volume [number from 0 to 150]", event.getTextChannel());
        }
    }
}