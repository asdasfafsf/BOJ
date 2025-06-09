SELECT 
    p.product_id AS product_id,
    p.product_name AS product_name
FROM Sales s
JOIN Product p
  ON s.product_id = p.product_id
GROUP BY 
    p.product_id,
    p.product_name
HAVING 
    MIN(s.sale_date) >= '2019-01-01'
    AND MAX(s.sale_date) <= '2019-03-31';