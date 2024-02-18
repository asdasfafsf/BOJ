#include <iostream>
using namespace std;

int N;
int current = 0;
int arr[3]; // Current cell scores
int mins[3] = {0}; // Record minimum values for each cell
int maxs[3] = {0}; // Record maximum values for each cell

int getMin(int a, int b) {
    return (a < b) ? a : b;
}

int getMax(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    cin >> N;
    int temp0, temp1, temp2;

    while (current < N) {
        cin >> arr[0] >> arr[1] >> arr[2];

        temp0 = mins[0];
        temp1 = mins[1];
        temp2 = mins[2];

        mins[0] = getMin(temp0, temp1) + arr[0];
        mins[2] = getMin(temp1, temp2) + arr[2];
        mins[1] = getMin(getMin(temp0, temp1), temp2) + arr[1];

        temp0 = maxs[0];
        temp1 = maxs[1];
        temp2 = maxs[2];

        maxs[0] = getMax(temp0, temp1) + arr[0];
        maxs[2] = getMax(temp1, temp2) + arr[2];
        maxs[1] = getMax(getMax(temp0, temp1), temp2) + arr[1];

        current++;
    }

    cout << getMax(getMax(maxs[0], maxs[1]), maxs[2]) << " "
         << getMin(getMin(mins[0], mins[1]), mins[2]);

    return 0;
}
