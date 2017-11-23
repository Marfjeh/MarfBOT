package nl.marfprojects.MarfBOT.cmd;

import java.awt.Color;
import java.util.Random;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import net.dv8tion.jda.core.EmbedBuilder;

public class Weer extends Command {
	public Weer() {
		this.name = "weer";
		this.aliases = new String[]{"weather", "buienradar", "br"};
		this.help = "Get a weather image of the current weather supported arguments: europe, eur, latvain, lv, cloud, wolken, thunder, onweer, usa.";
		this.arguments = "<map>";
	}
	
	protected void execute(CommandEvent event) {
		String args = event.getArgs();
		switch (args) {
			case "europe":
				break;
			default:
				sendMap(event, "buienradar", "https://api.buienradar.nl/image/1.0/RadarMapNL?w=1024&h=1024", "http://www.buienradar.nl/", "Copyright (C) Buienradar");
		}
		

	}
	
	/*
	 * Build a map.
	 * 
	 * @param CommandEvent event
	 * @param String MapTitle Map title to show on top of the embed
	 * @param String MapImage Url of the image file
	 * @param String MapURL Url to the Website when clicking on the title
	 * @param String MapCopyright Text on the Footer for example copyright.
	 * @return void
	 */
	protected void sendMap(CommandEvent event, String MapTitle, String MapImage, String MapURL, String MapCopyright) {
		Random rand = new Random();
		MapImage = MapImage + "&random=" + rand.toString() + "&marfBOT=.gif"; //this is to overcome to discord stop caching the image and display it as a gif.
		EmbedBuilder builder = new EmbedBuilder();
		builder	.setColor(Color.decode("0x6EB0E0"))
				.setTitle(MapTitle)
				.setImage(MapImage)
				.setFooter(MapCopyright, null);
				
		event.reply(builder.build());
	}
}
