#include <stdio.h>

int main() {

	int input = 0;
	int x_Count = 1;
	int y_Count = 1;
	int x_Direction = 0;
	int y_Direction = 0;
	int count = 1;
	int num = 0;

	int previous = 0;

	int xVec[4] = { 1,-1,0,1 };
	int yVec[4] = { 0,1,1,-1 };

	scanf("%d", &input);

	for (int i = 0; i < input; i++) {
		x_Count += x_Direction;
		y_Count += y_Direction;
		count--;
		if (count == 0) {
			if (previous % 2 == 0)
				count = 1;
			else {
				num++;
				count = num;
			}
			x_Direction = xVec[previous];
			y_Direction = yVec[previous];
			previous++;
			previous %= 4;
			
		}
	}
	printf("%d/%d", y_Count, x_Count);
	return 0;
}
