package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import com.jagrosh.jdautilities.commandclient.Command.Category;

import net.dv8tion.jda.core.EmbedBuilder;

import java.awt.*;
import java.util.Random;

public class WeerCommand extends Command {
	public WeerCommand() {
		this.name = "weer";
		this.aliases = new String[]{"weather", "buienradar", "br", "radar", "rain"};
		this.help = "Get a weather image of the current weather supported arguments: europe, eur, latvain, lv, cloud, wolken, thunder, onweer, usa.";
		this.arguments = "<map>";
		this.category = new Category("Random");
	}
	
	protected void execute(CommandEvent event) {
		String args = event.getArgs();
		switch (args) {
			case "europe":
			case "eur":
				sendMap(event, "Buienradar - Europe", "https://api.buienradar.nl/image/1.0/radarmapeu/?ext=gif", "https://www.buienradar.nl/wereldwijd/europa/buienradar/3uurs", "Copyright (C) Buienradar");
				break;
				
			case "latvain": case "lv": case "latvia": case "latvija": case "latveja":
				sendMap(event, "SRI - rain/snow radar", "http://lietus.lv/sri/srilast.gif?bleh=0", "http://lietus.lv/", "Copyright (C) SRI");
				break;
				
			case "cloud": case "wolken":
				sendMap(event, "Buienradar - cloud radar", "https://api.buienradar.nl/image/1.0/cloudmapnl/?ext=gif", "https://www.buienradar.nl/nederland/zon-en-wolken/wolkenradar", "Copyright (C) Buienradar");
				break;
				
			case "thunder": case "onweer":
				sendMap(event, "Buienradar - thunder radar", "https://api.buienradar.nl/image/1.0/lightningnl/?ext=gif", "https://www.buienradar.nl/nederland/neerslag/onweerradar", "Copyright (C) Buienradar");
				break;
				
			case "sunpower": case "uv":
				sendMap(event, "Buienradar - UV Radar", "https://api.buienradar.nl/image/1.0/sunpowereu/?ext=gif", "https://www.buienradar.nl/nederland/zon-en-wolken/zonkracht-uv", "Copyright (C) Buienradar");
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
