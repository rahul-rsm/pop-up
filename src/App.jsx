
import './App.css'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

function App() {

  return (
    <>
      <Header />
      <main className='mx-4 my-4 md:mx-8'>     
      <Outlet />      
      </main>
    </>
  )
}

export default App
