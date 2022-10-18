import { useEffect, useState, useMemo } from "react";

const useFetch = (url) => {
  const [value, setValue] = useState('');
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const todoMemo = useMemo(() => value, [value])
  useEffect(() => {

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setValue(data);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })

  }, [])

  return [value, isPending, error];

}

export default useFetch;