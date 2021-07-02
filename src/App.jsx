import React, {useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-green-500">
          Page has been open for <code>{count}</code> seconds. React is working.
        </p>
      </header>
    </div>
  );
}

export default App;
