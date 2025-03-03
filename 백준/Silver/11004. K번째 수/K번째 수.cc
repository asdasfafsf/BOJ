#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);

	int N,K;
	cin >> N>>K;

	vector<int>num(N);

	for (int i = 0; i < N; i++)
	{ cin >> num[i]; }

	sort(num.begin(), num.end());

	cout << num[K-1];

}