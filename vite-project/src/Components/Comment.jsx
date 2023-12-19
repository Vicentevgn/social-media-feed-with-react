import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment( { content } ){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Pedropsortiz.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Walter Junior</strong>
                            <time
                                title='13 de dezembro as 15:30' 
                                dateTime='2023-12-13'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    {content}
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}