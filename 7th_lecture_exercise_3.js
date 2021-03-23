// cf. https://poiemaweb.com/fastcampus-exercise/exercise-hof

// EX 3. 프로퍼티 정렬
// 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 요소를 정렬하는 함수를 작성하라.
// 단, todos는 변경되지 않도록 하자.
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];




// function sortBy(key) {
// 	const todos2 = todos.slice();
// 	// const arr = [todos2[0][key], todos[1][key], todos[2][key]];
// 	// [...todos].sort((a,b) => a[key]>b[key] ? {} : (a))
	
// 	[...todos2].sort((a,b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0)));
//   // todos2[0][key] === id ? :
// }

function sortBy(key) {
  return [...todos].sort((a,b) => (a[key] > b[key] ? 2 : a[key] < b[key] ? -2 : 0));
}



console.log(sortBy('id'));
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
console.log(sortBy('content'));
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
console.log(sortBy('completed'));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/


// ------------- Pseudo Code ---------------- //
// 1. 제약조건: todos는 변경되지 않도록 하자. --> .slice() 사용하여 얕은복사 --> 카피본 만들기 
// 2. todos를 분해해서 하나씩 나열한다 
// 3. key 값 내의 values 를 비교한다 --> sort() 를 적용시킨다
// 3. 
