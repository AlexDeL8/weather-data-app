import styles from "../../page.module.css"
import AppGreeting from "./AppGreeting";
import AppLogo from "./AppLogo";

export default function AppHero(): React.JSX.Element {
    return(
        <div className={styles.appHero}>
            <AppGreeting />
            <AppLogo />
        </div>
    )
}