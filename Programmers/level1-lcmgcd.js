/*
**  최대 공약수와 최소 공배수

    두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환해주는 gcdlcm 함수를 완성해 보세요. 
    배열의 맨 앞에 최대공약수, 그 다음 최소공배수를 넣어 반환하면 됩니다. 
    예를 들어 gcdlcm(3,12) 가 입력되면, [3, 12]를 반환해주면 됩니다.
*/
function gcdlcm(a, b) {
    var answer = [];
		answer.push(gcd(a,b));
    answer.push(lcm(a,b));
    return answer;
}
function gcd(a, b){
	let mod = a % b;
  while(mod > 0){
   a = b;
   b = mod;
   mod = a % b;
  }
  return b;
}
function lcm(a,b){
 return a*b/gcd(a,b); 
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3,12));