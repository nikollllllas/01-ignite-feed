import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './comment.module.css'
import { Avatar } from '../avatar'

export function Comment(comment) {
  console.log(comment)
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src='https://github.com/nikollllllas.png'
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Nikollas</strong>
              <time
                title='22 de Fevereiro de 2024'
                dateTime='2024-02-22 11:10:55'>
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{comment.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
