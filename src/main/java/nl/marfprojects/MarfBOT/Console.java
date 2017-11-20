package nl.marfprojects.MarfBOT;

public class Console {
	public void nlog(String text) {
		System.out.println("[INFO | JAVA] " + text);
	}
	public void elog(String text) {
		System.out.println("[ERROR | JAVA]" + text);
	}
	public void wlog(String text) {
		System.out.println("[WARN | JAVA]" + text);
	}
	public void dlog(String text) {
		System.out.println("[DEBUG | JAVA]" + text);
	}
	public void clog(String title, String text) {
		System.out.println("[" + title + " | JAVA]" + text);
	}
}
