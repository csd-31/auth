import React from 'react'
import '../App.css'

function Home({ user }) {
  const logout = () => {
    window.open("http://localhost:4000/auth/logout", "_self");
  };
  return (
    <div className='home'>
      <h1>Welcome onboard, {user.username}</h1>
      <button className='logout-btn' onClick={logout}>Log out</button>
    </div>
  )
}

export default Home