import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './shared/Navbar'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-lightBlue min-h-[500px]">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App
