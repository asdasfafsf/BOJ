# Write your MySQL query statement below
SELECT 
    user_id as user_id,
    max(time_stamp) as last_stamp
FROM Logins
WHERE
    year(time_stamp) = '2020'
GROUP BY user_id