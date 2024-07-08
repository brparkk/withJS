// 사용자 정의 성능 위젯
// requestAnimationFrame 콜백을 이용해 현재 렌더링 사이클 ~ 다음 사이클 사이 시간 추적
// 콜백이 1초 내 호출하는 횟수를 추적한다.

let panel;
let start;
let frames;

function createElement() {
  const div = document.createElement("div");

  div.style.position = "fixed";
  div.style.left = "0px";
  div.style.top = "0px";
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.backgroundColor = "yellow";
  div.style.color = "white";

  return div;
}
