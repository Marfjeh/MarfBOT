package nl.marfprojects.MarfBOT.Commands.random;

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

import javax.annotation.Nonnull;

public class HelloWorld extends ListenerAdapter {

    @Override
    public void onGuildMessageReceived(@Nonnull GuildMessageReceivedEvent event) {
        if (event.getMessage().getContentRaw().equalsIgnoreCase("]ping")) {
            event.getChannel().sendMessage("HelloWorld For MarfBOT Reboot!").queue();
        }
    }
}
