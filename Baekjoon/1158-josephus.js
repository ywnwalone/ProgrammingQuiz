/*
**  <문제 1158>  조세퍼스 문제
**
**  조세퍼스 문제는 다음과 같다.

**  1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 M(<=N)이 주어진다.
**  이제 순서대로 M번째 사람을 제거한다.
**  한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다.
**  이 과정은 N명의 사람이 모두 제거될 때까지 계속된다.
**  원에서 사람들이 제거되는 순서를 (N,M)-조세퍼스 순열이라고 한다.
**  예를 들어(7,3)-조세퍼스 순열 <3, 6, 2, 7, 5, 1, 4>이다.

**  N과 M이 주어짐면 (N, M)-조세퍼스 순열을 구하는 프로그램을 작성하시오.
*/

/*
**  [입력]

**  첫째 줄에 N과 M이 빈 칸을 사이에 두고 순서대로 주어진다. (1 <= M <= N <= 5,000)
*/

/*
**  [출력]

**  예제와 같이 조세퍼스 순열을 출력한다.
*/

/*
**  [예제 1]

**  7 3
**  <3, 6, 2, 7, 5, 1, 4>
*/

var a = 7;
var b = 3;

function solution(a, b) {
    var answer = 0;
    var people = a;
    var arr = [];
    var now = 0; //현재 위치
    answer = '<';
    for (let i = 1; i <= a; i++) {
        arr.push(i);
    }
    while (true) {
        if (people == 0) {
            answer += '>';
            break;
        }
        now += b-1;
        if(now >=arr.length){
          now %= arr.length;
        }
        answer += arr.splice(now,1);
        people--;
        if(people != 0){
          answer += ', ';
        }
    }
    return answer;
}
console.log(solution(a, b));
