/*
**  두 정수 사이의 합

adder함수는 정수 a, b를 매개변수로 입력받습니다.
두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하세요. a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
예를들어 a가 3, b가 5이면 12를 리턴하면 됩니다.

a, b는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않습니다.
*/

function adder(a, b){
    var result = 0
    //함수를 완성하세요
    var temp = 0;
  	if(a > b ){
    	temp = a;
      a = b;
      b = temp;
    }
  	for(var i = a; i <=b; i++){
     result+= i; 
    }
    return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )