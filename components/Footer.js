import Link from "next/link"
import styles from '../styles/Footer.module.css';


export default function Footer() {
    return (
        <div className={styles.footer}>
            <p>Copyright &copy; DJ event 2021</p>
            <p>
                <Link href='/about'>About This Project</Link>
            </p>
        </div>
    )
}
