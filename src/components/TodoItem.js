import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useState, useEffect } from 'react';



const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #969696;
  font-size: 24px;
  cursor: pointer;
  /* &:hover {
    color: #ff6b6b;
  }
  display: none; */
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  /* padding-top: 12px;
  padding-bottom: 12px; */

  background: linear-gradient(90deg, #20c997 2.5%, #fff 0%);


  border: 1px solid rgb(236,236,236);
  border-radius: 15px;
  box-shadow: 3px 3px 10px rgb(225,225,225);
  margin: 15px ;
  padding: 32px 10px 32px 35px;

  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 23px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

// function TodoItem({ id, done, text }) {
//   const dispatch = useTodoDispatch();
//   const onToggle = () => dispatch({ type: 'TOGGLE', id });
//   console.log(id)
//   const onRemove = () => dispatch({ type: 'REMOVE', id });



function TodoItem({ todoList, setTodoList, id, done, text }) {
  const [isChecked, setIsChecked] = useState(done);
  // 체크박스 체크 여부

  // 체크박스 제어
  const onToggle = () => {
    setIsChecked(!isChecked);
    window.location.reload()
  };

  useEffect(() => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        done: isChecked,
      }),
    })
  }, [isChecked])



  const onRemove = () => {
    const newTodoList = todoList.slice().filter(el => el.id !== id);
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
    }).then(setTodoList(newTodoList));
  };


  return (
    <TodoItemBlock>
      <Text done={done}>{text}</Text>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
