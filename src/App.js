import {hot} from 'react-hot-loader/root';
import React, {useState} from 'react';

const Warning = React.lazy(() => import('./Warning'))

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello world!!!</h1>
      <h2 className={count > 6 ? 'warning' : null}>
        Count: {count}
      </h2>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>
      {
        count > 10 ?  (
          <React.Suspense fallback={<span>Loading</span>}>
            <Warning />
          </React.Suspense>
        ) :
        null
      }
    </div>
  );
}

export default hot(App);
