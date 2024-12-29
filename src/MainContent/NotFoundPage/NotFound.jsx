import styles from './NotFound.module.css'

export default function NotFound() {
    return (
        <div className={`${styles.Container} w-full sm:w-3/4`}>
            <p>Page Not Found.</p>
        </div>
    )
}