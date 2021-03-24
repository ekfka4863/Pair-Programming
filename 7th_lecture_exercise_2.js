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
  const result =  todos.map((todo) => todo[key])  //이때, todo.key 라고 하면 undefined가 나온다. 왜냐면 key라는 프로퍼티 키는 지정되지 않았기 때문! 그래서 마침표 표기법을 사용할 수는 없고 대괄호 표현법을 사용해야하는 것! 그래서 []가 쓰인 것이고, 그 안에는 문자열이 와야하는데... 평가가 되어져서 문자열이 될 수있는 식별자가 올수도 있다는 사실! 그래서 []안에 ()안에 인수로 받은 key가 쓰인 것!  
  return result
}
console.log(getValues('id'));
console.log(getValues('content'));
console.log(getValues('completed'));


// ------------- 강사님 Code ---------------- //
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// function으로 함수를 안만들고 아예 그냥 화살표 함수로 바로 적는 방법도...! 아래와 같이!
const getValues = key => todos.map(todo => todo[key]);

console.log(getValues('id'));
console.log(getValues('content'));
console.log(getValues('completed')); 
