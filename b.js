var users = [
  { id: 1, name: 'id', age: 36 },
  { id: 2, name: 'bd', age: 32 },
  { id: 3, name: 'cd', age: 32 },
  { id: 4, name: 'dd', age: 27 },
  { id: 5, name: 'ed', age: 25 },
  { id: 6, name: 'rd', age: 26 },
  { id: 7, name: 'td', age: 31 },
  { id: 8, name: 'yd', age: 23 }
];

// 1 명령형 코드

//  1. 30세 이상인 users를 거른다
var tempUsers = []
for (var i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    tempUsers.push(users[i]);
  }
}

console.log(tempUsers)

// 2. 30세 이상인 users이 names를 수집한다

var tempnames = [];
for (var i = 0; i < tempUsers.length; i++) {
  tempnames.push(tempUsers[i].name);
}

console.log(tempnames)

// 3. 30세 미만인 users를 거른다

var tempUsers = []
for (var i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    tempUsers.push(users[i]);
  }
}

console.log(tempUsers)

// 4 30세 미만인 users의 ages를 수집한다.

var tempnames = [];
for (var i = 0; i < tempUsers.length; i++) {
  tempnames.push(tempUsers[i].age);
}

console.log(tempnames)

// 2. _filter, _map으로 리펙토링
function _filter(list, predi) {
  var new_list = []
  for (var i = 0; i < list.length; i++) {
    if (predi(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}
var over_30 = _filter(users, function(user) {
  return user.age >= 30;
})
console.log(_filter(users, function(user) {
  return user.age >= 30;
}))

console.log(_filter(users, function(user) {
  return user.age < 30;
}))

console.log(_filter([1, 2, 3, 4], function(num) {
  return num % 2;
}))

console.log(_filter([1, 2, 3, 4], function(num) {
  return !(num % 2);
}))

function _map(tempUsers, mapper) {
var new_list = [];
for (var i = 0; i < tempUsers.length; i++) {
  new_list.push(mapper(tempUsers[i]));

}
  return new_list;
}

console.log(_map(over_30, function(user) {
  return user.name;
}))

