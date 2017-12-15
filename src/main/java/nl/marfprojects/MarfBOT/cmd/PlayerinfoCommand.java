package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import com.jagrosh.jdautilities.commandclient.Command.Category;

import net.dv8tion.jda.core.EmbedBuilder;
import net.dv8tion.jda.core.entities.Member;
import net.dv8tion.jda.core.entities.User;
import nl.marfprojects.MarfBOT.Helpers;

import java.text.SimpleDateFormat;
import java.util.Date;

public class PlayerinfoCommand extends Command {

    public PlayerinfoCommand() {
        this.name = "playerinfo";
        this.help = "Gives you info about a specific player.";
        this.category = new Category("Info");
        this.aliases = new String[] { "profile", "userinfo", "memberinfo", "playerprofile" };
    }

    @Override
    protected void execute(CommandEvent event) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm ss");
        String[] args = event.getArgs().split(" ");
        User user;
        User usr2;
        if (args[0].equalsIgnoreCase(""))  usr2 = event.getAuthor(); else if (event.getMessage().getMentionedUsers().size() == 0) usr2 = event.getJDA().retrieveUserById(args[0]).complete();
        else usr2 = event.getMessage().getMentionedUsers().get(0);
        user = usr2;
        if (user == null) user = event.getAuthor();
        EmbedBuilder eb = new EmbedBuilder();
        eb.setColor(Helpers.EmbedColor);
        eb.setTitle(user.getName() + "'s profile");
        if (event.getGuild().getMember(user) == null) {
        	eb.addField("ID:", user.getId(), true);
            eb.addField("Discord join date:", String.valueOf(user.getCreationTime().toLocalDate()), false);
            eb.addField("Member of this guild:", "false", false);
        } else {
            Member member = event.getGuild().getMember(user);
            String nickname = member.getNickname();
            if (nickname == null) nickname = "No nickname";
            eb.setThumbnail(user.getAvatarUrl());
            eb.addField("ID:", user.getId(), true);
            eb.addField("Nickname:", nickname, true);
            eb.addField("Status:", member.getOnlineStatus().toString(), true);
            eb.addField("Playing:", String.valueOf(member.getGame()), false);
            eb.addField("Discord join date:", String.valueOf(simpleDateFormat.format(Date.from(user.getCreationTime().toInstant()))), true);
            eb.addField("Guild join date:", String.valueOf(simpleDateFormat.format(Date.from(member.getJoinDate().toInstant()))), true);
        }
        event.reply(eb.build());
    }
}
