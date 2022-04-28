// 1: 동일한 인자를 넣으면 동일한 리턴값이 나와야한다.
function add(a, b) {
  return a + b;
}
console.log(add(1, 2)) // 3
console.log(add(1, 2)) // 3
console.log(add(1, 2)) // 3
 
// 2: 결과가 달라지는 함수는 순수함수가 아니다 
var c = 10;
function add2(a, b) {
  return a + b + c;
}
// 순수함수가 아닌 함수 (비순수함수)는 평가시점에따라 결괏값이 다르기때문에 평가시점이 중요함
console.log(add2(10,20))
console.log(add2(10,30))
console.log(add2(10,40))
c = 20;
console.log(add2(10,20))
console.log(add2(10,30))
console.log(add2(10,40))

// 3: 부수효과를 일으키는 함수 (외부상태를 변화시는 함수)
var c = 30;
console.log(c); //c === 30
function add3(a, b) {
  c = b;
  return a + b;
}

console.log(add3(10, 20));
console.log(c); //c === 20

// --------------비순수 함수 Case 1-----------------

var obj1 = { val: 10 };

function add4(obj, b) {
  obj.val += b
}
console.log(obj1.val) // obj1.val === 10
add4(obj1, 20);
console.log(obj1.val) // obj1.val === 30

// --------------순수 함수 Case 1--------------------

var obj1 = { val: 10 }; 
function add5(obj, b) {
  return { val: obj.val + b } //새로운 객체 리턴
}
console.log(obj1.val); // obj1.val === 10
var obj2 = add5(obj1, 20);
console.log(obj1.val); // obj1.val === 10
console.log(obj2.val)


/* 일급 함수 */

/* 1: 함수를 값으로 다룰수 있다  */
var f1 = function (a) {
  return a * a;
}
console.log(f1)

/* 2: 함수가 인자로 함수를 받을수 있다  */

function f3(f) {
  return f();
} // f3 결괏값은 어떤함수를 너으냐에 따라 달라진다

f3(function() {
  return 10;
})

f3(function() {
  return 20;
})

/* add_maker 함수 만들기*/

function add_maker(a) {
  return function(b) {
    return a + b;
  }
}

var add10 = add_maker(10)
console.log(add10(20));

function f4(f1, f2, f3) {
  return f3(f1() + f2());
}

f4(
  function() {return 2;},
  function() {return 1;},
  function(a) { return a * a});