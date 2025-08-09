import sys

data = sys.stdin.read().strip().split('\n')
N, K = map(int, data.pop(0).split())
amounts = list(map(int, data))


left = 1
right = max(amounts) * 2
answer = 0

while left <= right:
    mid = (left + right) // 2
    count = 0
    for amount in amounts:
        count += amount // mid  

    if count >= K:
        answer = mid
        left = mid + 1
    else:
        right = mid - 1

print(answer)