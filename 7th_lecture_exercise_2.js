// cf. https://poiemaweb.com/fastcampus-exercise/exercise-hof

// EX 2. 특정 프로퍼티 값 추출
// 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 각 요소 중, 해당 프로퍼티의 값만을 추출한 배열을 반환하는 함수를 작성하라.
// 단, for 문이나 Array#forEach는 사용하지 않도록 하자.
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getValues(key) {
	return [todos[0][key], todos[1][key], todos[2][key]]
}

console.log(getValues('id'));
console.log(getValues('content'));
console.log(getValues('completed')); 


// ------------- Pseudo Code ---------------- //
// 제약조건: for 문이나 Array#forEach는 사용하지 않고 todos의 프로퍼티 키를 인수로 넣었을 때, 각 객체의 프로퍼티 벨류를 반환하는 함수를 만들어라!
// 기댓값:
// console.log(getValues('id')); // [3, 2, 1]
// console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
// console.log(getValues('completed')); // [false, true, false]

// --------------- Clean Code --------------- // 
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
function getValues(key) {
  const result =  todos.map((todo) => todo[key])
  return result
}
console.log(getValues('id'));
console.log(getValues('content'));
console.log(getValues('completed'));