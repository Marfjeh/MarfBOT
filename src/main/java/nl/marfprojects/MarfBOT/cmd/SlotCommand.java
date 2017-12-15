package nl.marfprojects.MarfBOT.cmd;

import java.util.Random;

import com.jagrosh.jdautilities.commandclient.Command;
import com.jagrosh.jdautilities.commandclient.CommandEvent;
import com.jagrosh.jdautilities.commandclient.Command.Category;

public class SlotCommand extends Command {
	public SlotCommand() {
		this.name = "Slot";
		this.help = "A slot machine in Discord!";
		this.category = new Category("Random");
	}

	protected void execute(CommandEvent event) {
		int[] slotIMG = { 1, 2, 3 }; //needs to be images lateron.

	}

	public static int getRandom(int[] array) {
		int rnd = new Random().nextInt(array.length);
		return array[rnd];
	}

}
