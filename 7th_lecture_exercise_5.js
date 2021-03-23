// cf. https://poiemaweb.com/fastcampus-exercise/exercise-hof


// 5. 특정 요소 삭제
// todos에서 삭제할 요소의 id를 인수로 전달하면 해당 요소를 삭제하는 함수를 작성하라.
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
	const result = todos.filter(todo =>todo.id !== id)
	console.log(result);
}

removeTodo(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/

// ------------- Pseudo Code ---------------- //
// 1. filter라는 배열의 메소드가  어떠한 조건을 만족 시킨 아이들만 출력을 하는 특징이 있다(cf. 화살표함수)
// 2. 그래서 스프레드 문법으로 객체들이 담겨있는 배열을 펼치고 ...
// 3. 그런 다음, 만약에 전달받은 id와 조건이 맞지 않은 객체를 반환한다. 