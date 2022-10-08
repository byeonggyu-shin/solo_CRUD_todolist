import './App.css';
import { useEffect } from 'react';
import styled from "styled-components"
import ItemCreate from 'components/ItemCreate.js'
import List from './components/List.js'
import ListHead from './components/ListHead.js'
import ListTemplate from './components/ListTemplate.js'


function App() {

  return (
    <div className="App">
      {ListTemplate}
      {ListHead /}
      {List /}
      {ItemCreate /}
      {/ ListTemplate}
    </div>
  );
}

export default App;
