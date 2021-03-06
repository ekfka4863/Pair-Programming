// cf. https://poiemaweb.com/fastcampus-exercise/exercise-hof


// EX 7. 모든 요소의 completed 프로퍼티 값을 true로 설정
// todos의 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라.
// hint) 기존 객체의 특정 프로퍼티를 변경/추가하여 새로운 객체를 생성하려면 Object.assign 또는 스프레드 문법을 사용한다.
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
	todos.map(todo => todo.completed ? todo.completed = 'true' : todo.completed = 'true')
}

toggleCompletedAll();

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/


// ------------- Pseudo Code ---------------- //
// 1. todos의 모든 요소들의 completed 프로퍼티 값을 true로 설정하는 함수를 만들려면 
//    todos.map(todo => todo.completed  )  --> todo.completed


// ------------- 강사님 Code ---------------- //
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
// 소스가 3개 결과물도 3개 --> 맵사용!!!

function toggleCompletedAll() {
	// todos.map(todo => {...todo, completed: true}};
  // 근데 위에서 저렇게만 적으면 이게 코드 블로그이 {}인지 아니면 객체리터럴의 중괄호 {}인지 모르니깐 ()로 한번 더 감싸기! 
  todos.map(todo => ({...todo, completed: true})};
}

toggleCompletedAll();

console.log(todos);