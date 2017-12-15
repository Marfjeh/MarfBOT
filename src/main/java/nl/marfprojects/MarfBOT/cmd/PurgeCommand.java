package nl.marfprojects.MarfBOT.cmd;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;

import net.dv8tion.jda.core.Permission;

public class PurgeCommand extends Command{
	
	public PurgeCommand() {
		this.name = "Purge";
		this.help = "bulkdelete message from a channel. You'll need the permission `MANAGE_MESSAGES` to execute this command.";
		this.arguments = "<messages>";
		this.category = new Category("Moderation");
		this.cooldown = 1;
		this.guildOnly = true;
        this.userPermissions = new Permission[]{Permission.MESSAGE_MANAGE};
        this.botPermissions = new Permission[]{Permission.MESSAGE_MANAGE};
	}
	
	protected void execute(CommandEvent event) {
		
	}
}
