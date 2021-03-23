// cf. https://poiemaweb.com/fastcampus-exercise/exercise-hof


// EX 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기
// todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라.
// 단, for 문, Array#forEach는 사용하지 않도록 하자.
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
	let sum = 0; 
	todos.reduce((acc,cur) => cur.completed ? sum+= 1 : acc );
	return sum;
}

console.log(countCompletedTodos()); // 1


// ------------- Clean Code ---------------- //
let todos = [
	{ id: 3, content: 'HTML', completed: false },
	{ id: 2, content: 'CSS', completed: true },
	{ id: 1, content: 'Javascript', completed: false }
];
function countCompletedTodos() {
		const result = todos.reduce((acc,cur) => cur.completed ? acc+= 1 : acc, 0 );
		return result;
}
console.log(countCompletedTodos()); // 1