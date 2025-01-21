import styles from "../../../styles/hero.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default function AppLogo(): React.JSX.Element {
    return (
        <div className={styles.logo}>
            <FontAwesomeIcon icon={fas.faCloudSun} />
        </div>
    )
}