# [Gold III] No Left Turns - 9168 

[문제 링크](https://www.acmicpc.net/problem/9168) 

### 성능 요약

메모리: 11328 KB, 시간: 108 ms

### 분류

너비 우선 탐색, 그래프 이론, 그래프 탐색

### 제출 일자

2024년 12월 5일 19:51:15

### 문제 설명

<ul>
	<li>ALL HEADS: You're a Knight of the Round Table? </li>
	<li>ROBIN: I am.</li>
	<li>LEFT HEAD: In that case I shall have to kill you. </li>
	<li>MIDDLE HEAD: Shall I?</li>
	<li>RIGHT HEAD: Oh, I don't think so. </li>
	<li>MIDDLE HEAD: Well, what do I think? </li>
	<li>LEFT HEAD: I think kill him.</li>
	<li>RIGHT HEAD: Well let's be nice to him. </li>
	<li>MIDDLE HEAD: Oh shut up.</li>
</ul>

<p>As the story goes, the Knight scarpers off. Right Head has taken it upon himself to search the grounds for the knight so he, Left, and Middle can go extinguish him (and then have tea and biscuits.)</p>

<p>Consider the following 8 by 12 maze, where shaded squares are walls that can’t be entered.</p>

<p><img alt="" src="https://onlinejudgeimages.s3.amazonaws.com/problem/9168/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202016-06-13%20%EC%98%A4%ED%9B%84%206.17.46.png" style="height:256px; width:380px"></p>

<p>The shortest path between the Right Head (denoted by the S, for start) and the knight (denoted by the F, for finish) is of length 3, as illustrated above. But! Right Head can’t turn left or make U- Turns. He can only move forward and turn right. That means the shortest path that Right Head can find is significantly longer: at 29!</p>

<p><img alt="" src="https://onlinejudgeimages.s3.amazonaws.com/problem/9168/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202016-06-13%20%EC%98%A4%ED%9B%84%206.18.01.png" style="height:259px; width:379px"></p>

### 입력 

 <p>The input file will consist of a single integer N (N > 0) specifying the number of mazes in the file. Following this, on a maze by maze basis will be the number of rows, r (3 < r ≤ 20), a space, then the number of columns, c (3 < c ≤ 20). After this will follow r lines of c characters, representing a map of the maze:</p>

<pre>XXXXXXXXXXXXXX 
X          XXX
X XFXXXXX    X 
XXX   XX  XX X 
X S          X 
XX  XXXXXX X X 
X        X X X 
X X      X X X 
XXX XX       X 
XXXXXXXXXXXXXX
</pre>

<p>X’s mark those locations that are walls and can’t be occupied. S marks the start location, and F marks the Knight. Blanks are locations that can be freely traveled.</p>

### 출력 

 <p>The output is the length of the shortest path between the start and finish locations. Based on the above maze, your program would output the minimum no-left-turns path length of 29.</p>

