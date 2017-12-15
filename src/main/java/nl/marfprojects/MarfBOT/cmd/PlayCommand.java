package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import com.jagrosh.jdautilities.commandclient.Command.Category;
import net.dv8tion.jda.core.EmbedBuilder;
import net.dv8tion.jda.core.entities.Guild;
import net.dv8tion.jda.core.entities.VoiceChannel;
import nl.marfprojects.MarfBOT.Console;
import nl.marfprojects.MarfBOT.Helpers;
import nl.marfprojects.MarfBOT.Ref;
import nl.marfprojects.MarfBOT.audio.MusicManager;

import java.util.Arrays;

public class PlayCommand extends Command {
	public PlayCommand() {
		this.name = "play";
		this.help = "play a youtube link or direct .mp3 url (icecast supported)";
		this.aliases = new String[] { "live", "youtube", "soundhound" };
		this.category = new Category("Music");
		this.arguments = "<url/name>";
	}

	MusicManager manager = MusicManager.getManagerinstance();

	@Override
	protected void execute(CommandEvent event) {
		Guild guild = event.getGuild();
		VoiceChannel sendervoiceChannel = guild.getMember(event.getAuthor()).getVoiceState().getChannel();
		String args[] = event.getArgs().split(" ");
		if (args.length == 0 || args[0].equalsIgnoreCase("")) {// no args -> usage:
			EmbedBuilder eb = new EmbedBuilder();
			eb.setTitle("Error");
			eb.setColor(Helpers.EmbedColor);
			eb.setDescription("Invailid syntax. Usage: \n " + Ref.MarfBOT_PREFIX + " play [yt|sc|link] <url>");
			eb.addField("Legenda", "[] = optional" + "| = or" + "<> = needed", true);
			eb.setFooter("MarfBOT", null);
			event.reply(eb.build());
			return;
		}
		args[0] = args[0].toLowerCase();
		String songname = Arrays.toString(args).replaceFirst("sc", "").replaceFirst("yt", "")
				.replaceFirst("soundcloud", "").replaceFirst("youtube", "").replaceFirst("path", "")
				.replaceFirst("looplink", "");
		if (sendervoiceChannel == null) {
			EmbedBuilder eb = new EmbedBuilder();
			eb.setTitle("Error");
			eb.setColor(Helpers.EmbedColor);
			eb.setDescription("I can't join your Voicechannel. :/ Maybe try to join one?");
			eb.setFooter("MarfBOT", null);
			event.reply(eb.build());
			event.replyWarning("");
			return;
		}
		if (!guild.getAudioManager().isConnected() && !guild.getAudioManager().isAttemptingToConnect())
			guild.getAudioManager().openAudioConnection(sendervoiceChannel);
		if (args[0].equalsIgnoreCase("sc") || args[0].equalsIgnoreCase("soundcloud")) {
			manager.loadTrack(event.getTextChannel(), "scsearch:" + songname);
			Console.dlog("scsearch");
		} else if (args[0].equalsIgnoreCase("path")) {
			manager.loadTrack(event.getTextChannel(), args[(args.length - 1)]);
			Console.dlog("secrets, "+ args[(args.length)] + " songname: "+ songname);
		} else {
			manager.loadTrack(event.getTextChannel(), "ytsearch:" + songname);
		}
	}
}
