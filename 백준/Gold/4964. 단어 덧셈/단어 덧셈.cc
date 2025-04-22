#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    while (true)
    {
        int N;
        if (!(cin >> N))
        {
            break;
        }
        if (N == 0)
        {
            break;
        }
        vector<string> words(N);
        for (int i = 0; i < N; i++)
        {
            cin >> words[i];
        }
        vector<bool> leading(26, false);
        vector<bool> present(26, false);
        for (auto &w : words)
        {
            if (w.size() > 1)
            {
                leading[w[0] - 'A'] = true;
            }
            for (char c : w)
            {
                present[c - 'A'] = true;
            }
        }
        vector<char> keys;
        for (int c = 0; c < 26; c++)
        {
            if (present[c])
            {
                keys.push_back('A' + c);
            }
        }
        if (keys.size() > 10)
        {
            cout << 0 << '\n';
            continue;
        }
        unordered_map<char, long long> wt;
        for (auto &w : words)
        {
            int L = w.size();
            for (int p = 0; p < L; p++)
            {
                long long add = 1;
                for (int t = 0; t < L - p - 1; t++)
                {
                    add *= 10;
                }
                wt[w[p]] += add;
            }
        }
        sort(keys.begin(), keys.end(), [&](char a, char b)
        {
            return wt[a] > wt[b];
        });
        unordered_map<char, int> charToIdx;
        int K = keys.size();
        for (int i = 0; i < K; i++)
        {
            charToIdx[keys[i]] = i;
        }
        vector<vector<int>> wordsDigits(N);
        for (int i = 0; i < N; i++)
        {
            for (char c : words[i])
            {
                wordsDigits[i].push_back(charToIdx[c]);
            }
        }
        vector<int> mapVal(K, -1);
        long long count = 0;
        function<void(int,int)> dfs = [&](int depth, int mask)
        {
            if (depth == K)
            {
                long long sum = 0;
                for (int t = 0; t < N - 1; t++)
                {
                    long long v = 0;
                    for (int idx : wordsDigits[t])
                    {
                        v = v * 10 + mapVal[idx];
                    }
                    sum += v;
                }
                long long target = 0;
                for (int idx : wordsDigits[N - 1])
                {
                    target = target * 10 + mapVal[idx];
                }
                if (sum == target)
                {
                    count++;
                }
                return;
            }
            char key = keys[depth];
            for (int d = 0; d < 10; d++)
            {
                if (mask & (1 << d))
                {
                    continue;
                }
                if (d == 0 && leading[key - 'A'])
                {
                    continue;
                }
                mapVal[depth] = d;
                dfs(depth + 1, mask | (1 << d));
                mapVal[depth] = -1;
            }
        };
        dfs(0, 0);
        cout << count << '\n';
    }
    return 0;
}