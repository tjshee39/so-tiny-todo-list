import './App.css';
import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './templates/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState ([
    {
      id: 1,
      text: "리액트 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일 적용",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들기",
      checked: false,
    },
  ])

  // 신규 등록
  const nextId = useRef(4);
  const onInsert = useCallback((text: string) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, [todos]);

  // 삭제
  const onRemove = useCallback((id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }, [todos]);

  // 완료 / 미완료 toggle
  const onToggle = useCallback((id: number) => {
    setTodos(todos.map((todo) =>
        todo.id === id ? {
          ...todo,
          checked: !todo.checked
        } : todo
      )
    )
  }, [todos])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList 
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </TodoTemplate>
  );
}

export default App;
