import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo } from './assets'
import { Home, CreatePost } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#b6b6b6]'>
        <Link to='/'>
          <img src={logo} alt="logo" className='w-24 object-contain'/>
        </Link>
        <Link to='/createpost' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>Create</Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f1f3fa] min-h-[calc(100vh-73px)]:'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/createpost' element={<CreatePost/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App