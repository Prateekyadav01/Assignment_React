import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
const Home = () => {
  return (
    <div className='flex'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Home
