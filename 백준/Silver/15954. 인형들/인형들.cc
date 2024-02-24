#include <iostream>
#include <cmath>
using namespace std;

const int MAX_N = 501;
int numElements;
int windowSize;
int items[MAX_N];

int main() {
    cin >> numElements >> windowSize;
    for (int i = 0; i < numElements; i++) {
        cin >> items[i];
    }

    double smallestSD = 100000000;

    for (int i = windowSize - 1; i < numElements; i++) {
        int startIdx = 0;
        int endIdx = i;

        while (endIdx < numElements) {
            double mean = 0;
            int numItems = endIdx - startIdx + 1;

            for (int j = startIdx; j <= endIdx; j++) {
                mean += items[j];
            }
            mean /= numItems;

            double standardDeviation = 0;

            for (int j = startIdx; j <= endIdx; j++) {
                double temp = (items[j] - mean);
                temp *= temp;
                standardDeviation += temp;
            }
            standardDeviation /= numItems;
            standardDeviation = sqrt(standardDeviation);

            if (smallestSD >= standardDeviation) {
                smallestSD = standardDeviation;
            }
            startIdx++;
            endIdx++;
        }
    }

    cout.precision(10);
    cout << smallestSD << "\n";

    return 0;
}
