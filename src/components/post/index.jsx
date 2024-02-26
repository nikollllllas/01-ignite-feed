import styles from './post.module.css'

export function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://github.com/nikollllllas.png'
          />

          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>Web Dev</span>
          </div>
        </div>

        <time
          title='22 de Fevereiro de 2024'
          dateTime='22-02-24 19:10:55'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p></p>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href='#'>jane.design/doctorcare</a>
        </p>
        <p>
          <a href=''>#novoprojeto</a> <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}
