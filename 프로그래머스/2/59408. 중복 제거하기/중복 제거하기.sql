-- 코드를 입력하세요
SELECT
COUNT(*) AS count
FROM(SELECT DISTINCT
    NAME
FROM
    ANIMAL_INS
WHERE
    NAME IS NOT NULL) AS ANIMAL_INS