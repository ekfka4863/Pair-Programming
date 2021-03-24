// cf. https://poiemaweb.com/fastcampus-exercise/exercise-hof


// EX 9. id 프로퍼티의 값 중에서 최대값 구하기
// todos의 id 프로퍼티의 값 중에서 최대값을 구하는 함수를 작성하라.
// 단, for 문, Array#forEach는 사용하지 않도록 하자.
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
	const container = [];
	todos.map((todo) => container.push(todo.id)); // 화살표 끝에 있는 것들은 자동으로 리턴~ 
	return Math.max(...container);   //
}

console.log(getMaxId()); // 3


// ------------- Clean Code ---------------- //
const todos = [
	{ id: 3, content: 'HTML', completed: false },
	{ id: 2, content: 'CSS', completed: true },
	{ id: 1, content: 'Javascript', completed: false }
];
function getMaxId() {
	return Math.max(...todos.map( todo => todo.id));   //
}
console.log(getMaxId()); // 3


// ------------- 강사님 Code ---------------- //
const todos = [
	{ id: 3, content: 'HTML', completed: false },
	{ id: 2, content: 'CSS', completed: true },
	{ id: 1, content: 'Javascript', completed: false }
];
function getMaxId() {
	return todos.length ? Math.max(...todos.map( todo => todo.id)) : 0;   
	// 배열의 요소가 없는 빈 배열을 매핑하면 빈 배열을 반환하는데, 만약 빈 배열에 대하면 Math.max를 적용하면 -Infinity를 반환하기 때문에 삼항 조건으로 배열에 객체가 있으면 값을 반환하고, 만약 빈 배열이면 0을 반환하게 설정할 수 있다 우리가! 
	return Math.max(...todos.map( todo => todo.id), 0);  // 이 코드가 좋기도 한데... 근데 위에 코드는 신입 읽기도 가독성이 좋고... 뭐 ... 사실 둘다 사바사! 사람마다 선호하는 코드가 다를 수 있음! 
}
console.log(getMaxId()); // 3