import styles from "./page.module.css";
import AppHero from "./components/AppHero/AppHero";

export default function Home() {
  return (
    <div className={styles.home}>
      <nav>
        {/* <WeathAppBar /> */}
      </nav>
      <main className={styles.main}>
        <AppHero />
        {/* <SearchBar />
        <WeatherContent /> */}
      </main>
      <footer className={styles.footer}>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}
