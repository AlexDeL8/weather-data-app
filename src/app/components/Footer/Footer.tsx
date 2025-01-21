import styles from "../../../styles/footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(): React.JSX.Element {
    return (
        <div className={styles.footer}>
            {/* Can create a generic <FooterText link={newTab: (true)/false, href: "https://...", linkText?: "", icon?: {...}}> */}
            {/* How would I pass styles to the above obj prop? */} 
            {/* stylesKey: "dynamicKeyName", used like - styles["dynamicKeyName"], try it in footerAPILink */}
            <div className={styles.footerText}>
                Powered By:&thinsp;
                <a id={styles.footerAPILink} target="_blank" href="https://openweathermap.org/api">
                    OpenWeather<span><FontAwesomeIcon icon={faSquareArrowUpRight}/></span>
                </a>
            </div>
            <div className={styles.footerText}>
                Copyright© 2025 - Alex De Luca 
                {/* <span> might not be needed, check if <a> is inline (pretty sure) & if <FAIcon> is inline */}
                {/* If not inline, just add it to styling */}
                <span>&thinsp;
                    <a target="_blank" href="https://github.com/AlexDeL8">
                        <FontAwesomeIcon id={styles.footerGithub} icon={faGithub} />
                    </a>
                </span>
            </div>
        </div>
    )
}