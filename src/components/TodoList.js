import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
// import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 148px;
  overflow-y: auto;
`;



// function TodoList({ todoList }) { 

function TodoList({ todoList, setTodoList }) {
  // const todos = useTodoState();

  return (
    <TodoListBlock>
      {todoList.map(todo => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          done={todo.done}
          setTodoList={setTodoList}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
