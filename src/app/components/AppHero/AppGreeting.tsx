import styles from "../../page.module.css";

export default function AppGreeting() {
    return <h1 className={styles.greeting}>Welcome to <span id={styles.greetingLogo}>WeathApp</span></h1>
}