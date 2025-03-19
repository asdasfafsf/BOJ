-- 코드를 입력하세요
SELECT
    H.CAR_ID,
    (CASE
        WHEN EXISTS
        (
            SELECT
                1
            FROM
                CAR_RENTAL_COMPANY_RENTAL_HISTORY HH
            WHERE
                H.CAR_ID = HH.CAR_ID
                AND HH.START_DATE <= '2022-10-16'
                AND HH.END_DATE >= '2022-10-16'

        )
        THEN '대여중'
        ELSE '대여 가능'
    END) AS AVAILABILITY
FROM
    CAR_RENTAL_COMPANY_RENTAL_HISTORY H
GROUP BY
    H.CAR_ID
ORDER BY
    H.CAR_ID DESC

    