import { useState } from 'react'
import { Post } from './Post'
import './global.css'
import { Header } from './Components/Header'

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Vicente Garcia"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."
      />
      <Post 
        author="Bruno Gay"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."
      />
    </div>
  )
}

