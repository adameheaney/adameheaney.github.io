import styles from './BlogPostPage.module.css'
import blogdata from './blogdata.jsx'
import { Link } from 'react-router-dom'

export default function BlogPostPage({id}) {

    const blogpost = blogdata.find((post) => post.id == id)

    
    return (
        <>
            <article className={styles.blogpost}>
                <header>
                    <h1>{blogpost.title}</h1><time dateTime={new Date(blogpost.date).toISOString()}>{new Date(blogpost.date).toDateString()}</time>
                </header>
                <p>{blogpost.content}</p>
                <Link className={styles.home} to="/">Home</Link>
                
			</article>
        </>
    )
}