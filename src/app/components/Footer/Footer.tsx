import styles from "../../../styles/footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerText}>
                Powered By:&thinsp;
                <a id={styles.footerAPILink} target="_blank" href="https://openweathermap.org/api">
                    OpenWeather<span><FontAwesomeIcon icon={faSquareArrowUpRight}/></span>
                </a>
            </div>
            <div className={styles.footerText}>
                Copyright© 2025 - Alex De Luca 
                <span>&thinsp;
                    <a target="_blank" href="https://github.com/AlexDeL8">
                        <FontAwesomeIcon id={styles.footerGithub} icon={faGithub} />
                    </a>
                </span>
            </div>
        </div>
    )
}