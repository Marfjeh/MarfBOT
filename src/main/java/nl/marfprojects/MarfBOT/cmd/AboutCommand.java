package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import com.jagrosh.jdautilities.commandclient.Command.Category;

import net.dv8tion.jda.core.EmbedBuilder;
import nl.marfprojects.MarfBOT.Helpers;
import nl.marfprojects.MarfBOT.Ref;

import java.awt.*;

public class AboutCommand extends Command {

	public AboutCommand() {
		this.name = "about";
		this.help = "About MarfBOT";
		this.aliases = new String[] {"marfbot"};
		this.category = new Category("Info");
	}

	protected void execute(CommandEvent event)
    {
    	long Memused = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
		EmbedBuilder builder = new EmbedBuilder();
		builder	.setColor(Helpers.EmbedColor)
				.setThumbnail("https://cdn.discordapp.com/app-icons/263948498351685632/6f567162a58c7580359a879621af2ce5.png")
				.setDescription("```" + Ref.MarfBOT_Logo + "```")
				.addField("Version", Ref.MarfBOT_VER, true)
				.addField("Made by", "Crazymarf#0020", true)
				.addField("Java Version", System.getProperty("java.version"), true)
				.addField("OS", System.getProperty("os.name"), true)
				.addField("OS version", System.getProperty("os.version") , true)
				.addField("OS Arch", System.getProperty("os.arch"), true)
				.addField("Assigned CPU Cores:", Long.toString(Runtime.getRuntime().availableProcessors()), true)
				.addField("Total Memory", Long.toString(Runtime.getRuntime().totalMemory() / 1024 / 1024) + " MB", true)
				.addField("Used Memory", Long.toString(Memused / 1024 / 1024) + " MB", true)
				.addField("Free Memory", Long.toString(Runtime.getRuntime().freeMemory() / 1024 / 1024) + " MB", true)
		        .addField("Total servers", String.valueOf(event.getJDA().getGuilds().size()), true)
		        .addField("Total users", String.valueOf(event.getJDA().getUsers().size()), true)
				.addField("Invite me to your discord server (including the permissions)", "<https://discordapp.com/oauth2/authorize?client_id=263948498351685632&scope=bot&permissions=3333120>", false)
				.setFooter(Helpers.getFooter(), null);
		event.reply(builder.build());
    }
}