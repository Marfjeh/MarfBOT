package nl.marfprojects.MarfBOT;

import com.jagrosh.jdautilities.commandclient.CommandClientBuilder;
import com.jagrosh.jdautilities.waiter.EventWaiter;
import net.dv8tion.jda.core.AccountType;
import net.dv8tion.jda.core.JDA;
import net.dv8tion.jda.core.JDABuilder;
import net.dv8tion.jda.core.entities.Game;
import net.dv8tion.jda.core.entities.Guild;
import net.dv8tion.jda.core.events.DisconnectEvent;
import net.dv8tion.jda.core.exceptions.RateLimitedException;
import net.dv8tion.jda.core.hooks.IEventManager;
import net.dv8tion.jda.core.hooks.InterfacedEventManager;
import net.dv8tion.jda.core.hooks.ListenerAdapter;
import net.dv8tion.jda.core.requests.SessionReconnectQueue;
import nl.marfprojects.MarfBOT.cmd.*;

import javax.security.auth.login.LoginException;
import java.io.IOException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

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
				new AboutCommand(),
				new ClearCommand(),
				new DebuggerCommand(),
				new PingCommand(),
				new PlayCommand(),
				new PlayerinfoCommand(),
				//new PsCommand(),
				new QueueCommand(),
				new SkipCommand(),
				new SkipXCommand(),
				new StopCommand(),
				new VolumeCommand(),
				new WeerCommand()
				);

		new JDABuilder(AccountType.BOT)
				.setToken(Ref.MarfBOT_Token)
				.addEventListener(waiter)
				.addEventListener(new Leagcy_Commands())
				.setBulkDeleteSplittingEnabled(false)
				.setEventManager((IEventManager) new ThreadedEventManager())
				.setReconnectQueue(new SessionReconnectQueue())
				.addEventListener(client.build())
				.buildAsync();
	}
	//kernel functions where you need to 'talk' directly to JDA.
	
    public void onDisconnect(DisconnectEvent e) {
        for (Guild guild : e.getJDA().getGuilds()) {
            guild.getAudioManager().closeAudioConnection();
        }
    }
	
	/*
	 * Change Gametext in discord
	 * @param String Gamename text what will be showed in 'playing'
	 * @return void
	 */
	public static void changeGame(String gamename) {
		Ref.MarfBOT_GAME = gamename;
		JDA.getPresence().setGame(Game.of(Ref.MarfBOT_GAME));
	}
	
	 private static class ThreadedEventManager extends InterfacedEventManager {
	        private final ExecutorService threadPool = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors() + 1);
	        public void handle(net.dv8tion.jda.core.events.Event e) {
	            threadPool.submit(() -> super.handle(e));
	        }
	}
}
