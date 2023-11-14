import styles from "./Carte.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Search from "./SearchEngine";
import { useState } from "react";

export default function Carte() {
  const [search, setSearch] = useState("");
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <section className={styles.carte}>
        <h3 className={styles.carte__title}>
          Cardápio
        </h3>
        <Search
          search={search}
          setSearch={setSearch} 
        />
      </section>
    </main>
  )
}