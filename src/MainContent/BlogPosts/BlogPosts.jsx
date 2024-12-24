import { Link, Route, Routes } from "react-router-dom"
import TextBar from "../../Components/TextBar/TextBar"
import styles from './BlogPosts.module.css'
import blogdata from './blogdata'

export default function BlogPosts({animationOn}) {

    
    function goUp() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <TextBar id='blog-posts' left={true} animationOn={animationOn} text='BLOGPOSTS BLOGPOSTS BLOGPOSTS BLOGPOSTS BLOGPOSTS BLOGPOSTS  &nbsp;'/>
            <section  className={styles.sectionThree}>
                <div className={styles.header}>
                    <h1>Welcome to my blog!</h1>
                    <p style={{margin:'0 20% 0 20%'}}>
                        Though it'd be more appropriately referred to as my online journal. 
                        Join me along on my journey through college as I write down what's been happening in my life from time to time!
                    </p>

                </div>
                <div style={{height:'10px', borderTop:'3px #c7c7c7 solid', marginTop:'10px'}}>

                </div>
                <div className={styles.previewsContainer}>
                {blogdata.map((post) => (
                    <div className={styles.postPreview} key={post.id}>
                        <h2>{post.title}</h2><time dateTime={new Date(post.date).toISOString()}>{new Date(post.date).toDateString()}</time>
                        <p>
                            {post.preview}
                        </p>
                        <Link onClick={goUp}to={`/blog/${post.id}`} className={styles.readMore}>Read More</Link>
                    </div>
                ))}
                </div>
            </section>
        </>
    )
}