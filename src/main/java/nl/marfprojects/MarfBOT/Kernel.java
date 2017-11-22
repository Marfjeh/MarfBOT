package nl.marfprojects.MarfBOT;

import javax.security.auth.login.LoginException;

import net.dv8tion.jda.core.AccountType;
import net.dv8tion.jda.core.JDA;
import net.dv8tion.jda.core.JDABuilder;
import net.dv8tion.jda.core.entities.Game;
import net.dv8tion.jda.core.exceptions.RateLimitedException;
import net.dv8tion.jda.core.hooks.ListenerAdapter;

public class Kernel extends ListenerAdapter {
	public static JDA JDA;

	public static void main(String[] args) {
		
		if (Ref.MarfBOT_logChat) 
		System.out.println(Ref.MarfBOT_Logo);
		
		Console.nlog("MarfBOT Kernel started!");
		Console.nlog("MarfBOT:Java Version: " + Ref.MarfBOT_VER);
		try {
			JDA = new JDABuilder(AccountType.BOT).setToken(Ref. MarfBOT_Token).buildBlocking();
			JDA.getPresence().setGame(Game.of(Ref.MarfBOT_GAME));
			JDA.addEventListener(new Commands());
			JDA.addEventListener(new Kernel());
		} catch (LoginException | IllegalArgumentException | InterruptedException | RateLimitedException e) {
			e.printStackTrace();
		}

	}
	public static void changeGame(String gamename) {
		Ref.MarfBOT_GAME = gamename;
		JDA.getPresence().setGame(Game.of(Ref.MarfBOT_GAME));
	}
	public static void bootJDA(String[] args) {
		
	}
}
