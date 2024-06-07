import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './shared/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" min-h-[500px]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App
