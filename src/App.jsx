import { Header } from './components/header'
import './global.css'
import styles from './App.module.css'
import { Post } from './components/post'
import { Sidebar } from './components/sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar>sidebar</Sidebar>

        <main>
          <Post />

          <Post />
        </main>
      </div>
    </div>
  )
}

