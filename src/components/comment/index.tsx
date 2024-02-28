import { HandsClapping, Trash } from '@phosphor-icons/react'
import styles from './comment.module.css'
import { Avatar } from '../avatar'
import { useState } from 'react'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [clapCount, setClapCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleClapComment() {
    setClapCount(() => {
      return clapCount + 1
    })
  }

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

            <button
              onClick={handleDeleteComment}
              title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button
            onClick={handleClapComment}
          >
            <HandsClapping />
            Aplaudir <span>{clapCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
