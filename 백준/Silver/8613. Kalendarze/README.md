# [Silver I] Kalendarze - 8613 

[문제 링크](https://www.acmicpc.net/problem/8613) 

### 성능 요약

메모리: 229040 KB, 시간: 1028 ms

### 분류

이분 탐색, 누적 합

### 제출 일자

2024년 10월 15일 19:24:47

### 문제 설명

<p>Zajmujesz się kontaktami handlowymi między dwoma plemionami: Arbuzanami i Bananitami. Duży problem stanowi to, że plemiona te posługują się różnymi kalendarzami.</p>

<p>Kalendarz Arbuzan składa się z $n$ miesięcy o długościach (wyrażonych w dniach) $a_1, a_2, \dots , a_n$, natomiast kalendarz Bananitów - z $m$ miesięcy o długościach $b_1, b_2, \dots , b_m$.</p>

<p>Liczba dni w roku według obu kalendarzy jest taka sama, czyli $a_1 + a_2 + \dots + a_n = b_1 + b_2 + \dots + b_m$.</p>

<p>Twoim zadaniem jest napisanie programu służącego do zamiany dat pomiędzy kalendarzami Arbuzan i Bananitów.</p>

### 입력 

 <p>W pierwszym wierszu standardowego wejścia znajdują się dwie liczby całkowite $n$ i $m$ ($1 ≤ n, m ≤ 1\,000\,000$), oddzielone pojedynczym odstępem, oznaczające liczby miesięcy w kalendarzach Arbuzan i Bananitów.</p>

<p>W drugim wierszu znajdują się liczby całkowite $a_1, a_2, \dots , a_n$ ($1 ≤ a_i ≤ 1\,000$) pooddzielane pojedynczymi odstępami, oznaczające długości kolejnych miesięcy w kalendarzu Arbuzan, zaś w trzecim wierszu znajdują się liczby całkowite $b_1, b_2, \dots , b_m$ ($1 ≤ b_i ≤ 1\,000$) pooddzielane pojedynczymi odstępami, oznaczające długości kolejnych miesięcy w kalendarzu Bananitów.</p>

<p>W czwartym wierszu znajduje się jedna liczba całkowita $z$ ($1 ≤ z ≤ 100\,000$) oznaczająca liczbę zapytań.</p>

<p>W każdym z kolejnych $z$ wierszy znajduje się opis jednego zapytania. Składa się on z dwóch liczb całkowitych $d_i$, $m_i$ oraz jednego znaku $c_i$, pooddzielanych pojedynczymi odstępami, oznaczających odpowiednio dzień i miesiąc oraz kierunek konwersji daty. Jeżeli znak $c_i$ jest literą '<code>A</code>', to liczby $d_i$ oraz $m_i$ spełniają następujące warunki: $1 ≤ m_i ≤ n$, $1 ≤ d_i ≤ a_{m_i}$ i oznaczają datę w kalendarzu Arbuzan, którą Twój program powinien zamienić na datę w kalendarzu Bananitów. Jeżeli natomiast znak $c_i$ jest literą '<code>B</code>', to $d_i$ oraz $m_i$ spełniają następujące warunki: $1 ≤ m_i ≤ m$, $1 ≤ d_i ≤ b_{m_i}$ i oznaczają datę w kalendarzu Bananitów, którą Twój program powinien zamienić na datę w kalendarzu Arbuzan.</p>

### 출력 

 <p>Twój program powinien wypisać na standardowe wyjście $z$ wierszy. W $i$-tym z nich powinna znaleźć się odpowiedź na $i$-te zapytanie w postaci dwóch liczb $d'_i$, $m'_i$ oddzielonych pojedynczym odstępem, oznaczających żądany numer miesiąca i dnia w odpowiednim kalendarzu.</p>

