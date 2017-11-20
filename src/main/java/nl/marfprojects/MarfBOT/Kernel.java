package nl.marfprojects.MarfBOT;

import javax.security.auth.login.LoginException;

import net.dv8tion.jda.core.AccountType;
import net.dv8tion.jda.core.JDA;
import net.dv8tion.jda.core.JDABuilder;
import net.dv8tion.jda.core.entities.Game;
import net.dv8tion.jda.core.exceptions.RateLimitedException;
import net.dv8tion.jda.core.hooks.ListenerAdapter;

public class Kernel extends ListenerAdapter {
	public static JDA bot;

	public static void main(String[] args) {
		System.out.println("MarfBOT Kernel started!\nMarfBOT:Java Version: 0.0.1");
		try {
			bot = new JDABuilder(AccountType.BOT).setToken(Ref. MarfBOT_Token).buildBlocking();
			bot.getPresence().setGame(Game.of(Ref.MarfBOT_GAME));
			bot.addEventListener(new Commands());
			bot.addEventListener(new Kernel());
		} catch (LoginException | IllegalArgumentException | InterruptedException | RateLimitedException e) {
			e.printStackTrace();
		}

	}

}
