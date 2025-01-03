
import java.util.Scanner;

public class Main {
	private Scanner scan;
	
	public Main() {
	    setScanner();	
	    printResult();
	}
	
	public void setScanner() {
		scan = new Scanner(System.in);
	}
	
	public int recursive(int n, int k) {
		if (k == 0 || n == k) {
			return 1;
		}
		
		return recursive(n - 1, k) + recursive(n - 1, k - 1);
	}
	
	public void printResult() {
		System.out.println(recursive(scan.nextInt(), scan.nextInt()));
	}
	
	public static void main(String args[]) {
		new Main();
	}

}
