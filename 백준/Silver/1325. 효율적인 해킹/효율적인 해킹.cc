#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
 
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
 
    int N, M;
    cin >> N >> M;
    vector<vector<int>> graph(N + 1);
    for (int i = 0; i < M; i++){
        int A, B;
        cin >> A >> B;
        graph[B].push_back(A);
    }
 
    vector<int> lens;
    lens.push_back(-1);
    int maxCount = 0;
    vector<bool> visited(N + 1, false);
    for (int i = 1; i <= N; i++){
        vector<int> queue;
        queue.push_back(i);
        visited[i] = true;
        int current = 0;
        while (current < queue.size()){
            int node = queue[current];
            for (int nextNode : graph[node]){
                if (visited[nextNode]) continue;
                queue.push_back(nextNode);
                visited[nextNode] = true;
            }
            current++;
        }
        for (int node : queue)
            visited[node] = false;
        int count = queue.size();
        lens.push_back(count);
        maxCount = max(maxCount, count);
    }
 
    vector<int> answer;
    for (int i = 1; i < lens.size(); i++){
        if (lens[i] == maxCount)
            answer.push_back(i);
    }
    for (int i = 0; i < answer.size(); i++){
        cout << answer[i] << (i < answer.size() - 1 ? " " : "\n");
    }
    return 0;
}