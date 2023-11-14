import React from "react";
import styles from './SearchEngine.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: Props) {
    return <div className={styles.search}>
        <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
        <CgSearch
            size={20}
            color="#4c4d5e"
        />
    </div>;
}