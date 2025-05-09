# Write your MySQL query statement below
SELECT
    w1.id as Id
FROM Weather w1
JOIN Weather w2
    ON w2.recordDate = w1.recordDate - INTERVAL 1 DAY
WHERE
    w1.temperature > w2.temperature 