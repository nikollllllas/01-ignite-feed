import { Avatar } from '../avatar'
import styles from './sidebar.module.css'
import { PencilSimpleLine } from '@phosphor-icons/react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=-50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt=''
      />

      <div className={styles.profile}>
        <Avatar src='https://github.com/nikollllllas.png' />

        <strong>Nikollas Ohta</strong>
        <span>web dev</span>
      </div>

      <footer>
        <a href='#'>
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
