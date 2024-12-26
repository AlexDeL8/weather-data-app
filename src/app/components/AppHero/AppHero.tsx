'use client'

import { useState, useEffect } from "react";
import styles from "../../../styles/hero.module.css"
import AppGreeting from "./AppGreeting";
import AppLogo from "./AppLogo";

export default function AppHero(): React.JSX.Element {
    const [visable, setVisable] = useState(false)

    useEffect(() => {
        setVisable(true)
    }, [])

    return(
        <div className={visable ? `${styles.appHero} ${styles.visible}` : styles.appHero}>
            <AppGreeting />
            <AppLogo />
        </div>
    )
}