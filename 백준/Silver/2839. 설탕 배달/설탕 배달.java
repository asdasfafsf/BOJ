import java.util.Scanner;

public class Main {
	public static void main(String args[]) {
		Scanner a = new Scanner(System.in);

		int n = a.nextInt();
		int count[] = { -1, 0 };
		
		while(n<3 || n >5000)
			n=a.nextInt();
		
		while (count[0] * 3 + count[1] * 5 != n && count[0] * 3 < n) {
			count[0]++;
			count[1] = 0;
			while (count[0] * 3 + count[1] * 5 < n)
				count[1]++;	
		}
        
		if (n == (count[0] * 3 + count[1] * 5))
			System.out.println(count[0] + count[1]);
		else
			System.out.println("-1");
	}
}
