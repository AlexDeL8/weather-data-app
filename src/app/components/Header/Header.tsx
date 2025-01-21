'use client'

import styles from '../../../styles/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Header(): React.JSX.Element {
    const [theme, setTheme] = useState<string>('light')

    return (
        <div className={styles.Header}>
            <div className={styles.ThemeToggle} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                <FontAwesomeIcon className={styles.ThemeIcon} icon={theme === 'light' ? faSun : faMoon} />
            </div>
        </div>
    )
}