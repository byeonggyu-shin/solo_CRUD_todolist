import { useEffect } from 'react';
import { useState } from 'react';

const url = 'http://localhost:3001/todos';

export function GetTodo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  return [data, setData];
}
