import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/Vicentevgn.png" />
                    <div 
                        className={styles.authorInfo}>
                        <strong>Vicente Garcia</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time 
                    title='13 de dezembro as 15:30' 
                    dateTime='2023-12-13'>
                    Publicado há 1h
                </time>                
            </header>

            <div className={styles.content}>
                <p> Fala galera up</p>
                <p> alguem avisa o rauber q nao é legal da o cu pro cavalo do cassio bonotto </p>
                <p> a mamae do lacerda se alimenta de pica</p>
                <p>
                    <a href="">#uhu </a>
                    <a href="">#semCá </a>
                    <a href="">#arvoreBlauBr </a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type="submit">Publicar</button>                
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}