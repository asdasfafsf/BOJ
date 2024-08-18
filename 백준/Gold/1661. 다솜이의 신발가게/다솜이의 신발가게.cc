#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
#include <limits>

using namespace std;

int main() {
    int N, P;
    cin >> N >> P;
    vector<vector<int>> productsList(4);

    for (int i = 0; i < N; ++i) {
        int C, productType;
        cin >> C >> productType;
        productsList[productType].push_back(C);
    }

    for (int i = 1; i <= 3; ++i) {
        sort(productsList[i].begin(), productsList[i].end());
    }

    double answer = P;
    int oneValue = 0;
    int twoValue = 0;
    int threeValue = 0;

    for (int one = 0; one <= min(N, (int)productsList[1].size()); ++one) {
        if (one > 0) oneValue += productsList[1][one - 1];
        twoValue = 0;
        for (int two = 0; two <= min(N, (int)productsList[2].size()); ++two) {
            if (one + two > N) break;
            if (two > 0) twoValue += productsList[2][two - 1];
            threeValue = 0;
            for (int three = 0; three <= min(N, (int)productsList[3].size()); ++three) {
                if (one + two + three > N) break;
                if (three > 0) threeValue += productsList[3][three - 1];

                double rate = pow(0.99, one) * pow(0.98, two) * pow(0.97, three);
                answer = min(answer, (P * rate) + (oneValue + twoValue + threeValue));
            }
        }
    }

    cout << fixed << answer << endl;

    return 0;
}