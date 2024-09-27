# [Gold II] 생물학자 - 3116 

[문제 링크](https://www.acmicpc.net/problem/3116) 

### 성능 요약

메모리: 62996 KB, 시간: 1816 ms

### 분류

브루트포스 알고리즘, 자료 구조, 수학

### 제출 일자

2024년 9월 27일 23:59:59

### 문제 설명

<p>생물학자를 꿈꾸는 강산이는 새해 선물로 현미경을 받았다. </p>

<p>어느 날, 물 속에 있는 박테리아의 움직임을 관찰하고 있었다. 관찰을 한 시간 정도 하다보니, 일정한 규칙대로 움직인다는 것을 알 수 있었다.</p>

<p>물방울은 크기가 무한대인 정사각형 격자로 모델링 할 수 있다. 박테리아는 한 정사각형에 있다. 박테리아가 움직이는 방향은 다음과 같이 숫자로 표현할 수 있다.</p>

<table class="table table-bordered" style="width: 12%;">
	<tbody>
		<tr>
			<td style="width: 4%; text-align:center;">1</td>
			<td style="width: 4%; text-align:center;">2</td>
			<td style="width: 4%; text-align:center;">3</td>
		</tr>
		<tr>
			<td style="text-align:center;">8</td>
			<td style="text-align:center;">B</td>
			<td style="text-align:center;">4</td>
		</tr>
		<tr>
			<td style="text-align:center;">7</td>
			<td style="text-align:center;">6</td>
			<td style="text-align:center;">5</td>
		</tr>
	</tbody>
</table>

<p>모든 박테리아는 동시에 움직이고, 1초 단위로 움직이고, 한 방향으로만 움직인다. 박테리아 여러 마리가 같은 칸에 있을 수도 있다.</p>

<p>박테리아의 위치와 움직이는 방향이 주어졌을 때, 박테리아 여러 마리가 같은 칸에 제일 많이 있을 때가 언제인지, 그리고 그 때 몇 마리가 같은 칸에 있었는지 구하는 프로그램을 작성하시오. 만약 이러한 최댓값이 여러개라면, 가장 빠른 시간을 출력한다.</p>

### 입력 

 <p>첫째 줄에 박테리아의 수 N(1 ≤ N ≤ 5,000)이 주어진다.다음 N개의 줄에는 세 개의 정수 X, Y, D (-1,000,000 ≤ X,Y ≤ 1,000,000), (1 ≤ D ≤ 8) 가 주어진다. </p>

<p>X와 Y는 박테리아의 시작 좌표이며, D는 방향이다. X값은 왼쪽에서 오른쪽으로 갈 수록 증가하며, Y값은 위로 갈수록 증가한다.</p>

<p>박테리아의 시작 위치가 겹치는 경우는 없으며, 적어도 한 번은 박테리아가 만난다.</p>

### 출력 

 <p>첫째 줄에 박테리아가 같은 칸에 가장 많이 있었을 때, 몇 마리나 있었는지 출력한다. 둘째 줄에는 그 때의 시간을 출력한다.</p>

