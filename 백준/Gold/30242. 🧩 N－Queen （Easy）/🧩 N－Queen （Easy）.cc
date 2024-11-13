#include <iostream>
#include <vector>
#include <cstdlib>
using namespace std;

int N;
vector<int> queens;
vector<int> emptyRows;

vector<bool> rows;
vector<bool> cols;
vector<bool> diag1;
vector<bool> diag2;

void update(int y, int x) {
    rows[y] = true;
    cols[x] = true;
    diag1[y - x + N - 1] = true;
    diag2[y + x] = true;
}

void clear(int y, int x) {
    rows[y] = false;
    cols[x] = false;
    diag1[y - x + N - 1] = false;
    diag2[y + x] = false;
}

bool isSafe(int y, int x) {
    return !rows[y] && !cols[x] && !diag1[y - x + N - 1] && !diag2[y + x];
}

void solve(int y, int depth) {
    if (depth == emptyRows.size()) {
        for (int i = 0; i < N; i++) {
            cout << queens[i] + 1 << " ";
        }
        cout << endl;
        exit(0);
    }

    for (int x = 0; x < N; x++) {
        if (isSafe(y, x)) {
            update(y, x);
            queens[y] = x;
            solve(emptyRows[depth + 1], depth + 1);
            queens[y] = -1;
            clear(y, x);
        }
    }
}

int main() {
    cin >> N;
    queens.resize(N, -1);
    rows.resize(N, false);
    cols.resize(N, false);
    diag1.resize(2 * N - 1, false);
    diag2.resize(2 * N - 1, false);

    for (int i = 0; i < N; i++) {
        int elem;
        cin >> elem;
        queens[i] = elem - 1;
        if (queens[i] == -1) emptyRows.push_back(i);
    }

    for (int i = 0; i < N; i++) {
        if (queens[i] != -1) {
            update(i, queens[i]);
        }
    }

    if (!emptyRows.empty()) {
        solve(emptyRows[0], 0);
        cout << -1 << endl;
    } else {
        for (int i = 0; i < N; i++) {
            cout << queens[i] + 1 << " ";
        }
        cout << endl;
    }

    return 0;
}