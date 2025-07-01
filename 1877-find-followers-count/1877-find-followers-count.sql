# Write your MySQL query statement below
SELECT 
    f1.user_id as user_id,
    count(f1.follower_id) as followers_count
FROM Followers f1
GROUP BY
    f1.user_id
ORDER BY
    f1.user_id asc