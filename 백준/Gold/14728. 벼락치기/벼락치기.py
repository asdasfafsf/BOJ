def max_value():
    import sys

    # Read input
    data = sys.stdin.read().split()
    n = int(data[0])
    t = int(data[1])
    items = []
    index = 2
    for _ in range(n):
        w = int(data[index])
        v = int(data[index + 1])
        items.append((w, v))
        index += 2

    # Initialize dp array
    dp = [0] * (t + 1)

    # Fill dp array
    for weight, value in items:
        for i in range(t, weight - 1, -1):
            if dp[i - weight] + value > dp[i]:
                dp[i] = dp[i - weight] + value

    print(dp[t])

max_value()