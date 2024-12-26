'use client'

import { useState, useEffect } from "react"
import styles from "../../../styles/search.module.css"
import SearchBarHeading from "./SearchBarHeading"

export default function SearchBar(): React.JSX.Element {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 400)
    }, [])

    return(
        <div className={visible ? `${styles.weatherSearch} ${styles.visible}` : styles.weatherSearch}>
            <SearchBarHeading />
            <input
                className={styles.searchBar}
                type="text"
                name="weatherLocation"
                placeholder="Search a City or Zip Code" />
        </div>
    )
}