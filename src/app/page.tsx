import styles from "../styles/page.module.css";
import AppHero from "./components/AppHero/AppHero";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
    <div className={styles.home}>
      <nav>
        {/* <Header /> */}
      </nav>
      <main className={styles.main}>
        <AppHero />
        <SearchBar />
        {/* <WeatherContent /> */}
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
