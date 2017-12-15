package nl.marfprojects.MarfBOT;

import net.dv8tion.jda.core.EmbedBuilder;
import net.dv8tion.jda.core.entities.TextChannel;
import net.dv8tion.jda.core.managers.AudioManager;

import java.awt.Color;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;

public class Helpers {

    public static long	starttime;
    public static Color EmbedColor		= Color.decode("0x6EB0E0");
    public static Color EmbedColorError = Color.decode("0xF04747");
    public static Color EmbedColorWarn	= Color.decode("0xFAA61A");
    public static Color EmbedColorInfo	= Color.decode("0x43B581");

    public static String getDurationBreakdown(long millis) {
        if (millis < 0) {
            throw new IllegalArgumentException("Duration must be greater than zero!");
        }

        long days = TimeUnit.MILLISECONDS.toDays(millis);
        millis -= TimeUnit.DAYS.toMillis(days);
        long hours = TimeUnit.MILLISECONDS.toHours(millis);
        millis -= TimeUnit.HOURS.toMillis(hours);
        long minutes = TimeUnit.MILLISECONDS.toMinutes(millis);
        millis -= TimeUnit.MINUTES.toMillis(minutes);
        long seconds = TimeUnit.MILLISECONDS.toSeconds(millis);

        StringBuilder sb = new StringBuilder(64);
        if (days != 0) {
            sb.append(days);
            sb.append("d ");
        }
        if (hours != 0) {
            sb.append(hours);
            sb.append("h ");
        }
        if (minutes != 0) {
            sb.append(minutes);
            sb.append("min ");
        }
        sb.append(seconds);
        sb.append("s ");

        return (sb.toString());
    }

    private static ScheduledExecutorService executor = Executors.newSingleThreadScheduledExecutor();

    public static void ScheduleClose(AudioManager manager) {
        if (!manager.isConnected() && !manager.isAttemptingToConnect())
            return;

        executor.execute(() -> {
            manager.closeAudioConnection();
           Console.clog("MusicManager", "Terminated AudioConnection in " + manager.getGuild().getId());
        });
    }

    public static String getOnlineTime() {
        return getDurationBreakdown(System.currentTimeMillis() - starttime);
        //TODO: broken, need to fix it.
    }

    public static String getFooter() {
        return "MarfBOT";
    }
    
    /*
     * Send a embed.
     * @param String Title Set the title of the embed
     * @param String Content set the content(setDescription) of the embed.
     * @param TextChannel Channel getchannel.
     * @param Color Type Color of the left side of the embed, available examples: EmbedColor = marfbot color
     */
    public static void sendEmbed(String Title, String Content, TextChannel Channel, Color Type) {
    	EmbedBuilder builder = new EmbedBuilder();
    	builder	.setColor(Type)
        		.setDescription(Content)
        		.setTitle(Title)
        		.setFooter(getFooter(), null);
        Channel.sendMessage(builder.build()).queue();
    }
    
	private long getUsedMem() {
		return Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
	}
}
