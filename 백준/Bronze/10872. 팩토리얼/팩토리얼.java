
import java.util.Scanner;

public class Main {
	private Scanner scan;
	private int n;
	
	public Main() {
		setScanner();
		setN();
		printResult();
	}
	
	public void setScanner() {
		scan = new Scanner(System.in);
	}
	
	public void setN() {
		n = scan.nextInt();
	}
	
	public int factorial(int n) {
		if (n == 0) {
			return 1;
		}
		
		for (int i = n - 1; i > 0; i--) {
			n *= i;
		}
		
		return n;
	}
	
	public void printResult() {
		System.out.println(factorial(n));
	}
	
	public static void main(String args[]) {
		new Main();
	}

}
