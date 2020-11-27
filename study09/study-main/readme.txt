카드 맞추기 게임

1. 각기다른 색깔을 가진 10개의 카드를 만든다
2. start 버튼 생성
3. start 버튼을 클릭하면 색깔카드가 random 배치 / 3초 후 블럭처리
4. start 버튼 아래에 질문 표출 - 이 색상의 카드는 어디 있을까요 ? red (다음질문에서 중복되지 않도록한다.)
5. 색깔카드를 맞췄는지에 따라 (true / false) 다르게 출력
true = 맞춰진 카드는 활성화되어 색상이 돌아오고 다음질문으로 넘어간다 (지나간 질문들과 중복XXX)
false = alert으로 "다시 선택해주세요."라는 문구와 틀린횟수를 출력하고 동일한 문제를 다시 출력한다.
6. 문제를 다 맞추었을 경우 alert으로 Congratulations ! 틀린횟수 : xx 을 출력


colors[i].Math
카운트다운 숫자를 안보이게하자
스타트버튼을 클릭하면 카드가 랜덤배치 되면서 카운트다운 시작
카운트다운이 끝나면 카드는 블럭



---------
0~9까지의 난수 발생
Math.floor(Math.random()*10)


Materialize
https://materializecss.com/getting-started.html


특정 시간 경과 후 실행 방법
setTimeout(function() {
        console.log('hihihi~~');
}, 3000)