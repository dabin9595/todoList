import { useState, useRef } from "react";

import "./App.css";

import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

function App() {
  const mockTodo = [
    {
      id: 0,
      isDone: false,
      content: "공부하기",
      createdDate: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "요리하기",
      createdDate: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: "빨래널기",
      createdDate: new Date().getTime(),
    },
  ];

  const [todo, setTodo] = useState(mockTodo);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  // 만약에 투두 리스트를 서버에서 받아온다면? id를 어떻게 처리해야할까?
  // firebase - firestore - RBMS 처럼 사용할 수 있다.
  // RDMS - 자바스크립트의 json -> 키와 값이 매핑되어 있지.
  const idRef = useRef(3);
  // 최적화 필요
  // 무슨 이유 때문에 최적화를 해야하는가?
  // 어떤 방식의 최적화가 알맞는가?
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} />
    </div>
  );
}

export default App;
