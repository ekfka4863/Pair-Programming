// cf. https://poiemaweb.com/fastcampus-exercise/exercise-hof

// EX 1. html 생성
// 아래 배열을 사용하여 html을 생성하는 함수를 작성하라.
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  todos.forEach(todo => {
    

    html += `
    <li id="${todo.id}">
      <label><input type="checkbox" ${todo.completed ? 'checked' : ''}>${todo.content}</label>
    </li>`

  });

  return html;
}

console.log(render());
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/

// ------------- Pseudo Code ---------------- //
// # 주어진 정보: 기본적으로 todos라는 배열이 이미 존재하는데, 그 안에 {id, content, completed의 여부가 불리언으로} 이미 주어짐
// # 주어진 함수: render()라는 함수안에 html 이라는 변수로 빈문자열이 할당되어 있음
// # todos.forEach로 출력해내야하는 것을 보자면... 아래와 같고... 아래와 같이 3번 forEach 메서드를 사용하여 반복출력 해야한다 
// <li id="3">
//  <label><input type="checkbox">HTML</label>
// </li> 
// todos.forEach(todo => console.log(todo['id'], todo['content']))  
// ${todo.completed ? 'checked' : ''}


// ------------- 강사님 Code ---------------- //
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  // forEach 말고 map으로 문제해결 하는 것도 가능. 변수를 적을 필요가 없어 사실상 더 좋은 방법!
  // return todos.map(todo => {    
  //   // 여기서 계속 반복되는 todo를 디스트럭처링 할당으로 대체할 수 있음! 
  //   return `<li id="${todo.id}">
  //     <label><input type="checkbox" ${todo.completed ? 'checked' : ''}>${todo.content}</label>
  //   </li>`;
  // 그래서 아래와 같이~^^ 그냥 받아드리기~!!
  return todos
    .map(({id, content, completed}) => {
      return `<li id="${id}">
                <label><input type="checkbox" ${completed ? 'checked' : ''}>${content}</label>
              </li>`
      ;
    })
    .join('')
}

console.log(render());


//  배열 디스트럭처링 할당 
const [a, b] = [1, 2];    // [a, b]안에는 뭐가 오는 자리?? 식별자가 오는 자리! 
console.log(a, b); 

// 만약 배열 디스트럭처링 할당이 없었으면 아래와 같이 해야한다는 안좋은 점이 ... 
const arr = [1, 2];
const a = arr[0];
const b = arr[1];  

// 그럼 이제, 객체 디스트럭처링 할당 
const {b, a} = {a:1, b:2};   // 차이점: 객체니까 {}로~ 
// 차이점: 객체 디스트럭처링 할당은 배열 디스트럭처링 할당처럼 순서대로 들어오는 것이 아님! 키대로 들어옴! 
// 그래서 console.log(a, b); 하면 그 순서대로 할당 안해도 오케이~ 

// 또한... 객체 디스트럭처링 할당을 할 때 사용할 수 있는 표현식!! 
const {b, a} = {a:1, b:2}; 

fuction foo(o) {  // 여기서 o 자리에 {a, b} 를 넣어도 되는데 왜?? 왜? 가능?? 왜냐면 ()안에 있는 매개변수에 결국 인수가 할당되는 거니까~ 
  return (인수)
};

