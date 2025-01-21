import styles from './ExternalLink.module.css'
import { Link } from 'react-router-dom'

export default function ExternalLink({link, text, icon}) {


    return (
        <>
            <Link target={'_blank'} to={link} className={`${styles.externalButton}`}> {icon} {text} </Link>
        </>
    )
}