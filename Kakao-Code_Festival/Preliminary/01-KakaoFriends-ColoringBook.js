/*
**  문제 1.
**  카카오프렌즈 컬러링북

**  출판사의 편집자인 어피치는 네오에게 컬러링북에 들어갈 원화를 그려달라고 부탁하여 여러 장의 그림을 받았다.
**  여러 장의 그림을 난이도 순으로 컬러링북에 넣고 싶었던 어피치는 영역이 많으면 색칠하기가 까다로워 어려워진다는 사실을
    발견하고 그림의 난이돌를 영역의 수로 정의하였다.
    (영역이란 상하좌우로 연결된 같은 색상의 공간을 의미한다.)

**  그림에 몇 개의 영역이 있는지와 가장 큰 영역의 넓이는 얼마인지 계산하는 프로그램을 작성해보자.
*/

/*
**  [입력 형식]

**  입력은 그림의 크기를 나타내는 m과 n, 그리고 그림을 나타내는 m*n 크기의 2차원 배열 picture로 주어진다.
**  제한조건은 아래와 같다.

**  - 1 <= m, n <= 100
**  - picture의 원소는 0이상 2^31 - 1 이하의 임의의 값이다.
**  - picture의 원소 중 값이 0인 경우는 색칠하지 않는 영역을 뜻한다.
*/

/*
**  [출력 형식]

**  리턴 타입은 원소가 두 개인 정수 배열이다. 그림에 몇 개의 영역이 있는지와 가장 큰 영역은 몇 칸으로 이루어져 있는지를 리턴한다.
*/

/*
**  [예제 입출력]

**  m: 6, n: 4, picture: [[1,1,1,0], [1,2,2,0], [1,0,0,1], [0,0,0,1], [0,0,0,3], [0,0,0,3]]

**  output : [4, 5]
*/


var test = {
  m: 6,
  n: 4,
  picture: [
    [1,1,1,0],
    [1,2,2,0],
    [1,0,0,1],
    [0,0,0,1],
    [0,0,0,3],
    [0,0,0,3]
  ]
};

function floodFill(picture,row,column,value,m,n){
  if(row < 0 || column <0 || row >= m || column >= n || value == 0){
    return 0;
  }
  if(picture[row][column] != value){
    return 0;
  }else{
    var count = 1;
    count += floodFill(picture,row,column+1,value,m,n);
    // count += floodFill(picture,row+1,column,value,m,n);
    // count += floodFill(picture,row-1,column,value,m,n);
    // count += floodFill(picture,row,column-1,value,m,n);

    return count;
  }

}
function solution(test){
  const m = test.m;
  const n = test.n;
  const picture = test.picture;

  var answer = 0;
  var count = 0;
  var maximum = 0;

  for(let i = 0; i<m; i++){
    for(let j = 0; j<n; j++){
      if(picture[i][j] != 0){
        answer = floodFill(picture,i,j,picture[i][j],m,n);
      }

    }
  }



  return answer;
}

console.log(solution(test));
