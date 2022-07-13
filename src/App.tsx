import React, { useState, useMemo, useDeferredValue } from 'react';

function App() {
  const [name, setName] = useState<string>('');
  const deferredName = useDeferredValue(name);

  const LIST_SIZE: number = 10000;

  const list = useMemo(() => {
    const dataList: string[] = [];
    for (let i: number = 0; i < LIST_SIZE; i++) {
      dataList.push(deferredName);
    }
    return dataList;
  }, [deferredName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <div>
      <input type='text' value={name} onChange={handleChange} />
      <p>
        {list.map((item) => {
          return <p>{item}</p>;
        })}
      </p>
    </div>
  );
}

export default App;
