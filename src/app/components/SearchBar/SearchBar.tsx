'use client'

import { useState, useEffect } from "react"
import styles from "../../../styles/search.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import SearchBarHeading from "./SearchBarHeading"

export default function SearchBar(): React.JSX.Element {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 400)
    }, [])

    function weatherSearch() {
        console.log("Searching...")
    }

    return(
        <div className={visible ? `${styles.weatherSearch} ${styles.visible}` : styles.weatherSearch}>
            <SearchBarHeading />
            <div className={styles.searchBarDiv}>
                {/* Magnifying glass */}
                <form className={styles.searchForm} action="/search">
                    <FontAwesomeIcon icon={fas.faMagnifyingGlass} onClick={() => weatherSearch()} />
                    <input
                        className={styles.searchBar}
                        type="text"
                        name="weatherLocation"
                        placeholder="Search a City or Zip Code..." />
                </form>
            </div>
        </div>
    )
}