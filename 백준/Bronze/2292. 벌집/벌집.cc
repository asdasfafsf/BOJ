#include <stdio.h>

int main() {

	int start = 1;
	int number = 0;
	int i = 0;

	scanf("%d", &number);
	for (; start + 6 * i < number; i++) {
		start = start + 6 * i;
	}

	printf("%d", i + 1);


	return 0;
}
