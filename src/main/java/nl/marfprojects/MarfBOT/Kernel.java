package nl.marfprojects.MarfBOT;

import java.io.IOException;

import javax.security.auth.login.LoginException;

import com.jagrosh.jdautilities.commandclient.CommandClientBuilder;
import com.jagrosh.jdautilities.waiter.EventWaiter;

import net.dv8tion.jda.core.AccountType;
import net.dv8tion.jda.core.JDA;
import net.dv8tion.jda.core.JDABuilder;
import net.dv8tion.jda.core.entities.Game;
import net.dv8tion.jda.core.exceptions.RateLimitedException;
import net.dv8tion.jda.core.hooks.ListenerAdapter;
import nl.marfprojects.MarfBOT.cmd.*;

public class Kernel extends ListenerAdapter {
	public static JDA JDA;

	public static void main(String[] args) throws IOException, LoginException, IllegalArgumentException, RateLimitedException {
		System.out.println(Ref.MarfBOT_Logo);
		Console.nlog("MarfBOT Kernel started!");
		Console.nlog("MarfBOT:Java Version: " + Ref.MarfBOT_VER);
		EventWaiter waiter = new EventWaiter();
		CommandClientBuilder client = new CommandClientBuilder();
		client.setGame(Game.of(Ref.MarfBOT_GAME));
		client.setOwnerId(Ref.MarfBOT_Owner);
		client.setPrefix(Ref.MarfBOT_PREFIX);
		client.addCommands(
				new About(),
				new Ping(),
				new Weer(),
				new Ps(),
				new Play(),
				new GC()
		);

		new JDABuilder(AccountType.BOT).setToken(Ref.MarfBOT_Token).addEventListener(waiter)
				.addEventListener(new Leagcy_Commands()).addEventListener(client.build()).buildAsync();
	}
	//kernel functions where you need to 'talk' directly to JDA.
	
	/*
	 * Change Gametext in discord
	 * @param String Gamename text what will be showed in 'playing'
	 * @return void
	 */
	public static void changeGame(String gamename) {
		Ref.MarfBOT_GAME = gamename;
		JDA.getPresence().setGame(Game.of(Ref.MarfBOT_GAME));
	}
}
