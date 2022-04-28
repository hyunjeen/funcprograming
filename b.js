var users = [
  { id: 'fw', name: 'i2ss', age: 30 },
  { id: 'fe', name: 'ifss', age: 32 },
  { id: 're', name: 'i3ss', age: 44 },
]
// 3 커링 함수

function _curry(fn) {
  return function (a, b) {
    arguments.length == 2 ? fn(a, b) : function (b) { return fn(a, b); };
  }
}


function _curryr(fn) {
  return function (a, b) {
    arguments.length == 2 ? fn(a, b) : function (b) { return fn(b, a); };
  }
}

var add = _curry(function (a, b) {
  return a + b
})
console.log(add(5, 6))
console.log(add(5))

//  get 함수

function _get(obj, key) {
  return obj == null ? undefined : obj[key];
}

console.log(users[0].name)
// console.log(users[6].name)
console.log(_get(users[0], "name"))
console.log(_get(users[6], "name"))

