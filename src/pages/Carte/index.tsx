import styles from "./Carte.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

export default function Carte() {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav> 
    </main>
  )
}
