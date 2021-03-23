// cf. https://poiemaweb.com/fastcampus-exercise/exercise-hof

// 4. 새로운 요소 추가
// 새로운 요소(예를 들어 { id: 4, content: 'Test', completed: false })를 인수로 전달하면 todos의 선두에 새로운 요소를 추가하는 함수를 작성하라. 단, Array#unshift나 Array#push는 사용하지 않도록 하자.
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {
	todos.splice(0, 0, newTodo);
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos);
/*
[
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/

// ------------- Pseudo Code ---------------- //
// 1. 새로운 객체를 인수로 전달받으면, 배열인 todos의 인덱스 [0]에다가 추가하는 함수를 만들어라! 
// 2. 단, 제약조건: Array#unshift나 Array#push는 사용하지 않도록 하자.
// 3. splice를 활용하여, 0번째부터 배열의 변경을 시작, 배열에서 제거할 요소의 수는 0개, 배열에 추가할 요소는 인자로 받는다... 