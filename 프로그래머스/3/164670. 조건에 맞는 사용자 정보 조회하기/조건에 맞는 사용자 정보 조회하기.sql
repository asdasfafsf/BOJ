

-- 코드를 입력하세요
SELECT
    U.USER_ID AS USER_ID,
    U.NICKNAME AS NICKNAME,
    TRIM(CONCAT(
        U.CITY,
        ' ',
        U.STREET_ADDRESS1,
        ' ',
        IFNULL(U.STREET_ADDRESS2, '')
    )) AS `전체주소`,
    CONCAT(
        SUBSTR(U.TLNO, 1, 3),
        '-',
        SUBSTR(U.TLNO, 4, 4),
        '-',
        SUBSTR(U.TLNO, 8, 4)
    ) AS `전화번호`
FROM
    (SELECT
        *
    FROM
        USED_GOODS_BOARD
    GROUP BY
        WRITER_ID
    HAVING
        COUNT(WRITER_ID) >= 3
    ) AS B
JOIN
    USED_GOODS_USER U
    ON B.WRITER_ID = U.USER_ID
ORDER BY
    U.USER_ID DESC
        
    