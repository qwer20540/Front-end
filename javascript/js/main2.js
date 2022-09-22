//함수 선언
function helloFunc() {
  //실행코드
  console.log(1234);
}

//함수호출
helloFunc();


function returnFunc(){
  return 123;
}

let ab = returnFunc();

console.log(ab); 

//함수선언
function sum(a, b) {
  return a + b;
}

//재사용
let a = sum(1, 2);
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a, b, c);

// 기명(이름이 있는)함수
function hello() {
  console.log('hello~');
}

// 익명(이름이 없는) 함수
let world = function() {
  console.log('world~');
}

hello();
world();


const heropy = {
  name : 'heropy',
  age: 66,
  getNmae: function() {
    return this.name;
  }
};

const hisName = heropy.getNmae();
console.log(hisName);
//혹은
console.log(heropy.getNmae());

let isShoww = true;
let checkedd = false;

if(isShoww){
  console.log('show!');
}

if(checkedd){
  console.log('checked!');
}

let isShowww = true; // show!!!         flase쓰면  hide? 나옴

if(isShowww){
  console.log('show!!!');
} else {
  console.log('hide?');
}