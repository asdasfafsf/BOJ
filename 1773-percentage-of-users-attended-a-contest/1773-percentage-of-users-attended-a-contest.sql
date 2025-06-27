SELECT 
  r.contest_id,
  ROUND(COUNT(DISTINCT r.user_id) * 100.0 / total.total_users, 2) AS percentage
FROM Register r
JOIN (
  SELECT COUNT(*) AS total_users FROM Users
) total
GROUP BY r.contest_id
ORDER BY percentage desc, contest_id asc