// cf. https://poiemaweb.com/fastcampus-exercise/exercise-hof

// EX 3. 프로퍼티 정렬
// 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 요소를 정렬하는 함수를 작성하라.
// 단, todos는 변경되지 않도록 하자.
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

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
//    또는 그냥 [...todos]로 배열을 복사할 수 있다. 
// 2. todos를 분해해서 하나씩 나열한다 
// 3. key 값 내의 values 를 비교한다 --> sort() 를 적용시킨다


// ------------- 강사님 Code ---------------- //
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function sortBy(key) {
  // 아래 sort() 안에 비교함수를 사용을 안할 수가 없는 이유는 문자열이 주어지지 않았기 떄문! 
  // 아래에서 그냥 a, b 를 사용하지 말고 넘어오는 객체 todo1, todo2로 바꿔주자!
  // return todos.sort((a,b) => a[key] - b[key]);     
  // 근데 위에서의 비교함수의 식에서는 - 를 사용했는데, 이게 숫자면 상관없는데 문자열이거나 불리언이면 어케 뺴???? 그래서 모든 경우를 포괄하게/범용성을 갖기 위해서 ... >, <를 사용해주는 것!
  // 결국 비교함수는 음수, 양수, 0 --> 이 셋중에 하나를 리턴해주면 된다! 
  // 그래서 아래와 같이 바꿔준다! 
  // return todos.sort((a,b) => todo1[key] > todo2[key] ? 1 : todo1[key] < todo2[key] ? -1 : 0);  
  // 근데 같다의 의미로 =를 사용해줘야 하는 경우도 있다! 예를 들어, [1, 1]과 같이! 이런 경우 뒤집지 않아도 됨! 그래서 우리는 =(같을 수도 있는 경우)인 경우도 고려해야함! 그래서 삼항조건으로 한번 더 쓰는 것!
  // return todos.sort((a,b) => todo1[key] > todo2[key] ? 1 : todo1[key] < todo2[key] ? -1 : 0);  
  // 그리고 sort는 원본을 직접 변경! 그래서 카피본을 만들어야 하는데... 이걸   
  // return [...todos].sort((a,b) => (a[key] > b[key] ? Infinity : a[key] < b[key] ? -Infinity : 0));
  return [...todos].sort((todo1,todo2) => (todo1[key] > todo2[key] ? Infinity : todo1[key] < todo2[key] ? -Infinity : 0));
}

// 여기서 더 짧게 화살표 함수로 대체하면... 
const sortBy = key => [...todos].sort((todo1,todo2) => (todo1[key] > todo2[key] ? 1: todo1[key] < todo2[key] ? -1: 0));