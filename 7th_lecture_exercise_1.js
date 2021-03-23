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

