package nl.marfprojects.MarfBOT.cmd;

import java.awt.Color;
import net.dv8tion.jda.core.EmbedBuilder;
import net.dv8tion.jda.core.events.message.guild.GuildMessageReceivedEvent;
import nl.marfprojects.MarfBOT.Ref;

public class About {
	public static void onExecution(GuildMessageReceivedEvent event) {
		long used = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
		EmbedBuilder builder = new EmbedBuilder();
		builder.setColor(Color.decode("0x6EB0E0"));
		builder.setThumbnail("https://cdn.discordapp.com/app-icons/263948498351685632/6f567162a58c7580359a879621af2ce5.png");
		builder.setDescription("```" + Ref.MarfBOT_Logo + "```");
		builder.addField("Version", Ref.MarfBOT_VER, true);
		builder.addField("Made by: ", "Crazymarf#0020", true);
		builder.addField("Java Version: ", System.getProperty("java.version"), true);
		builder.addField("OS: ", System.getProperty("os.name"), true);
		builder.addField("OS version:", System.getProperty("os.version") , true);
		builder.addField("OS Arch", System.getProperty("os.arch"), true);
		builder.addField("Total Memory", Long.toString(Runtime.getRuntime().totalMemory() / 1024 / 1024) + " MB", true);
		builder.addField("Used Memory", Long.toString(used / 1024 / 1024) + " MB", true);
		builder.addField("Free Memory", Long.toString(Runtime.getRuntime().freeMemory() / 1024 / 1024) + " MB", true);
		event.getChannel().sendMessage(builder.build()).queue();
	}
}
