import { useState } from 'react'
import './global.css'
import styles from './App.module.css'

import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Post } from './Components/Post'

const posts = [
  {
    id: 1,
    author: {
      name: 'Vicente Garcia',
      avatarUrl: 'https://github.com/Vicentevgn.png',
      role: 'Web Developer'
    },
    content: [
      { type: 'text', contente: 'Fala galera up' },
      { type: 'text', content: 'tudo em cima hj hein pessoal'} ,
      { type: 'text', content: 'alegria e ousadia'},
      { type: 'link', content: '#uhu' },
      { type: 'link', content: '#foguete' },
      { type: 'link', content: '#vamo' },
    ], 
    publishedAt: new Date('2023-12-13 15:30:00'),
  },

  {
    id: 2,
    author: {
      name: 'Gui Londero',
      avatarUrl: 'https://github.com/guilondero.png',
      role: 'sequelado'
    },
    content: [
      { type: 'text', contente: 'oi gentiii' },
      { type: 'text', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'} ,
      { type: 'text', content: 'Lorem ipsum dolor sit amet.'},
      { type: 'link', content: '#eeba' },
      { type: 'link', content: '#bola' },
      { type: 'link', content: '#praiou' },
    ], 
    publishedAt: new Date('2023-12-13 15:30:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

