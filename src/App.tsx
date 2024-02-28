import { Header } from './components/header'
import './global.css'
import styles from './App.module.css'
import { Post, PostType } from './components/post'
import { Sidebar } from './components/sidebar'
import {  } from './components/post'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/nikollllllas.png',
      name: 'Nikollas Ohta',
      role: 'student @ UNIPAR'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-02-25 23:10:55')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/filipedeschamps.png',
      name: 'Filipe Deschamps',
      role: 'educator @ youtube'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      { type: 'link', content: 'figma/randomurl/test' }
    ],
    publishedAt: new Date('2024-02-25 11:52:11')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

