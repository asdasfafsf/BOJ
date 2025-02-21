
SELECT BOOK_ID ,DATE_FORMAT(published_date, '%Y-%m-%d') AS PUBLISHED_DATE FROM BOOK
WHERE 
category = '인문'
AND DATE_FORMAT(published_date, '%Y') = '2021'
ORDER BY PUBLISHED_DATE