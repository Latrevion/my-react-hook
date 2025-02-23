import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeButton from './components/LikeButton'
// import MouseTracker from './components/MouseTracker'
import DogShow from './components/DogShow'
import useMousePosition  from './hooks/useMousePostion'
import useUrlLoader from './hooks/useUrlLoader'

const style = {
  width:200
}
const DogShowWithHook = ()=>{
  const [data,loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random')
  return (
    <>
    {loading?<p>Loading...</p>: <img src={data &&data.message} alt='dog' style={{width: 200}} />}
    {/* <button onClick={()=>{setFetch(!fetch)}}>see next img</button> */}
        </>
  )
}
function App() {
  const [count, setCount] = useState(0)
  const positions = useMousePosition()
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>{positions.x  } </h1>
      <h1>{positions.y}</h1>
      <DogShowWithHook></DogShowWithHook>
      {/* <DogShow></DogShow> */}
      {/* <MouseTracker></MouseTracker> */}
      <LikeButton></LikeButton>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
