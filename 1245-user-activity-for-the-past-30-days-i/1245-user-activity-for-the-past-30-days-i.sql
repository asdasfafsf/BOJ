SELECT 
    activity_date AS day,
    count(DISTINCT user_id) as active_users
FROM Activity
WHERE
    activity_date between '2019-06-28' AND '2019-07-27'
GROUP BY activity_date