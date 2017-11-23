package nl.marfprojects.MarfBOT;

import java.text.SimpleDateFormat;
import java.util.Calendar;

/*
 * To keep the original MarfBOT like console but to Java.
 */

public class Console {
	public static String getTime() {
		Calendar cal = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
		return sdf.format(cal.getTime());
	}
	public static void clog(String title, String text) {
		System.out.println("[" + title + "|" + getTime() + "]" + text);
	}
	
	public static void nlog(String text) {
		clog("INFO", text);
	}
	public static void elog(String text) {
		clog("ERROR", text);
	}
	public static void wlog(String text) {
		clog("WARN", text);
	}
	public static void dlog(String text) {
		clog("DEBUG", text);
	}
}
