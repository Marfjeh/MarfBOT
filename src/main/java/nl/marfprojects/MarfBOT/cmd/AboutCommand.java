package nl.marfprojects.MarfBOT.cmd;

import java.awt.Color;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import net.dv8tion.jda.core.EmbedBuilder;
import nl.marfprojects.MarfBOT.Helpers;
import nl.marfprojects.MarfBOT.Ref;

public class AboutCommand extends Command {

	public AboutCommand() {
		this.name = "about";
		this.help = "About MarfBOT";
	}

	protected void execute(CommandEvent event)
    {
        // ask what the user's name is
    	long Memused = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
		EmbedBuilder builder = new EmbedBuilder();
		builder	.setColor(Color.decode("0x6EB0E0"))
				.setThumbnail("https://cdn.discordapp.com/app-icons/263948498351685632/6f567162a58c7580359a879621af2ce5.png")
				.setDescription("```" + Ref.MarfBOT_Logo + "```")
				.addField("Version", Ref.MarfBOT_VER, true)
				.addField("Made by: ", "Crazymarf#0020", true)
				.addField("Java Version: ", System.getProperty("java.version"), true)
				.addField("OS: ", System.getProperty("os.name"), true)
				.addField("OS version:", System.getProperty("os.version") , true)
				.addField("OS Arch", System.getProperty("os.arch"), true)
				.addField("Total Memory", Long.toString(Runtime.getRuntime().totalMemory() / 1024 / 1024) + " MB", true)
				.addField("Used Memory", Long.toString(Memused / 1024 / 1024) + " MB", true)
				.addField("Free Memory", Long.toString(Runtime.getRuntime().freeMemory() / 1024 / 1024) + " MB", true)
		        .addField("Total server count", String.valueOf(event.getJDA().getGuilds().size()), false)
		        .addField("Total user count", String.valueOf(event.getJDA().getUsers().size()), true)
		        .addField("MarfBOT uptime", Helpers.getOnlineTime(), true)
				.addField("Invite me to your discord server", "<https://discordapp.com/oauth2/authorize?client_id=263948498351685632&scope=bot&permissions=3333120>", false);
		event.reply(builder.build());
    }
}