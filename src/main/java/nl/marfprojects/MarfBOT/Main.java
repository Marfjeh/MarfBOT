package nl.marfprojects.MarfBOT;

import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import nl.marfprojects.MarfBOT.Commands.random.HelloWorld;

import javax.security.auth.login.LoginException;

public class Main {
    private Main() {
    }

    public static void main(String[] args) throws LoginException {
        System.out.println("MarfBOT Reborn Booting up.\nSetting up JDA...");
        JDA jda = JDABuilder.createDefault("LOLOL YOU THINK YOU GET TOKEN FROM ME? XD XD XD XD XD").build();
        jda.addEventListener(new Listener());
    }
}
