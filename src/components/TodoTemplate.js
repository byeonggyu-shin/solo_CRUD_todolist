import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  /* width: 512px; */
  /* height: 768px; */
  width: 612px;
  height: 868px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 10px 10px 20px rgb(90, 90, 90);
  margin: 0 auto;
  margin-top: 15%;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
