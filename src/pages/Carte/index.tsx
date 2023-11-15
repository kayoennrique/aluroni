import styles from "./Carte.module.scss";
import Search from "./SearchEngine";
import { useState } from "react";
import Filters from "./Filters";
import Computer from "./Computer";
import Itens from './Itens';
import stylesTheme from 'styles/Theme.module.scss';

export default function Carte() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [computer, setComputer] = useState("");
  return (
    <section className={styles.carte}>
      <h3 className={stylesTheme.title}>
        Cardápio
      </h3>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <div className={styles.carte__filters}>
        <Filters
          filter={filter}
          setFilter={setFilter}
        />
        <Computer
          computer={computer}
          setComputer={setComputer}
        />
      </div>
      <Itens
        search={search}
        filter={filter}
        computer={computer}
      />
    </section>
  );
}