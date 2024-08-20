#include <iostream>
#include <string>
#include <iomanip>

using namespace std;
typedef unsigned long long ull;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int T;
    cin >> T;
    while (T--) {
        int buho = 1;
        string a, b;
        cin >> a >> b;

        if (a[0] == '-') {
            buho *= -1;
            a = a.substr(1);
        }
        if (b[0] == '-') {
            buho *= -1;
            b = b.substr(1);
        }

        ull n1 = static_cast<ull>(a[0] - '0') * 1000000000ULL + stoull(a.substr(2, 9).append(9 - a.substr(2).length(), '0'));
        ull n2 = static_cast<ull>(b[0] - '0') * 1000000000ULL + stoull(b.substr(2, 9).append(9 - b.substr(2).length(), '0'));

        ull result = n1 * n2;

        string resStr = to_string(result);

        while (resStr.length() < 18) resStr = "0" + resStr;

        if (resStr.length() > 18) {
            resStr = resStr.substr(0, resStr.length() - 18) + '.' + resStr.substr(resStr.length() - 18);
        } else {
            resStr = "0." + resStr;
        }

        if (buho == -1) {
            resStr = '-' + resStr;
        }

        cout << resStr << '\n';
    }

    return 0;
}