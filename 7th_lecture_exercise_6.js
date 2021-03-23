// cf. https://poiemaweb.com/fastcampus-exercise/exercise-hof


// 6. 특정 요소의 프로퍼티 값 반전
// todos에서 대상 요소의 id를 인수로 전달하면 해당 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라.
// hint) 기존 객체의 특정 프로퍼티를 변경/추가하여 새로운 객체를 생성하려면 Object.assign 또는 스프레드 문법을 사용한다.
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
	// const todos2 = [...todos]
	// const result = [todos2[id-1]['completed'] ? 'false' : 'true']    // 위에서 todos2는 결국 index값이 하나씩 앞으로 밀렸기 때문에 ... -1을 해준다! 

	// const arr = todos2[id-1]['completed'].map((currValue) => !currValue);
	// todos = todos.map(todo => todo.id === id ? (todo.completed ? todo.completed = { id: todo.id , content: todo.content ,completed: false} : 'true') : todo ) 
	// todos = todos.map(todo => todo.id ===id ? `{id: todo.id , content: ${todo.content}, completed: false}` : todo)
	// todos.map(todo => todo.id !== id ? (todo.completed ? todo.completed = false : todo.completed = true) : todo);
	todos.map(todo => todo.id === id ? (todo.completed ? todo.completed = false : todo.completed = true) : todo)
}


toggleCompletedById(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/


// ------------- Pseudo Code ---------------- //
// 1. todos라는 {} 객체를 감싼 배열에에서 대상 요소의 id를 인수로 전달하면 해당 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하시오 
// 2. 힌트) 스프레드 문법과 map을 사용! 
// 3. 우선 우리가 원하는 result는 todos라는 배열에서 각 객체들 중 completed의 프로퍼티 값을 반전 시키는 것이니... 삼항 연산자로 
//    만약 todo.id 가 인자로 받은 id와 같은가? 를 조건으로 걸고, 만약 그렇다면 !todo.completed로 반전한다. 