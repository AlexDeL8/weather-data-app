import styles from "../../../styles/search.module.css"

export default function SearchBarHeading() {
    const searchHeadingEnding = [
        "near you",
        "for vacation",
        "around your family",
        "for your work trip",
    ]

    return(
        <h2 className={styles.searchHeading}>Search below to view a summary of weather {searchHeadingEnding[0]}</h2>
    )
}