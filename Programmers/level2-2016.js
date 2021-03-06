/*
**  2016년

2016년 1월 1일은 금요일입니다. 2016년 A월 B일은 무슨 요일일까요? 두 수 A,B를 입력받아 A월 B일이 무슨 요일인지 출력하는 getDayName 함수를 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각

SUN,MON,TUE,WED,THU,FRI,SAT

를 출력해주면 됩니다. 예를 들어 A=5, B=24가 입력된다면 5월 24일은 화요일이므로 TUE를 반환하면 됩니다.

*/

function getDayName(a,b){
	var answer = 0;
  var week = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
  
  for(let i = 1 ; i < a; i ++){
    if(i==2){
     answer += 29; 
    }else if(i==1 || i==3 || i==5 || i==7 || i==8 || i==10){
     answer += 31;
    }else{
    	answer += 30;
    }
  }
  answer+=b;
  answer = week[(answer%7)];
  
	return answer;
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5,24));