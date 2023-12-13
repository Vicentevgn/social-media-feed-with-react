import { useState } from 'react'
import './global.css'
import styles from './App.module.css'

import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Post } from './Components/Post'

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post 
          />
          <Post 
          />
        </main>
      </div>
    </div>
  )
}

