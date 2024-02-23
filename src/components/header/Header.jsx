import styles from './header.module.css'
import logo from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt='Logo Ignite'
      />
      <strong>Ignite Feed</strong>
    </header>
  )
}
