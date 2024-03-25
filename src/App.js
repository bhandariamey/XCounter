import styles from './App.module.css'
import {useState} from 'react'

function App() {
  
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter+1)
  }

  const handleDecrement = () => {
    setCounter(prevCounter => prevCounter-1)
  }

  return (

    <>
      <h1>Counter App</h1>
      <p>Count: {counter}</p>
      <div className={styles.buttons}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
    
  );
}

export default App;
