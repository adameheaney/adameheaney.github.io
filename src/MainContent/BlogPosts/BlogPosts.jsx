import { Link, Route, Routes } from "react-router-dom"
import TextBar from "../TextBar/TextBar"
import styles from './BlogPosts.module.css'
import blogdata from './blogdata'
import BlogPostPage from "./BlogPostPage"

export default function BlogPosts({animationOn}) {

    
    return (
        <>
            <TextBar left={true} animationOn={animationOn} text='BLOGPOSTS BLOGPOSTS BLOGPOSTS BLOGPOSTS BLOGPOSTS BLOGPOSTS  &nbsp;'/>
            <section className={styles.sectionThree}>
                <p>Hey! This is where I track my progress and learning, so you and I can see all the work I've been doing!</p>
                {blogdata.map((post) => (
                    <div className={styles.postPreview} key={post.id}>
                        <h1>{post.title}</h1><time dateTime={new Date(post.date).toISOString()}>{new Date(post.date).toDateString()}</time>
                        <p>
                            {post.preview}
                        </p>
                        <Link to={`/blog/${post.id}`} className={styles.readMore}>Read More</Link>
                    </div>
                ))}
            </section>
        </>
    )
}