import styles from './Post.module.css'
import { format } from 'date-fns'
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Post( { author, publishedAt, content} ) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR});
    const publishedDateToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

    const [comments, setComments] = useState([
        'Post muito bacana!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateComment(event) {
        event.preventDefault();
        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    function handleNewCommentChange(event) {
        setNewCommentText(event.target.value);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div 
                        className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateToNow}
                </time>                
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'text') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if(line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea name='comment' onChange={handleNewCommentChange} value={newCommentText} placeholder='Deixe um comentário' />

                <footer>
                    <button type="submit">Publicar</button>                
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} />
                })}
            </div>
        </article>
    )
}