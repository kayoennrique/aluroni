import carte from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useState, useEffect } from "react";

interface Props {
    search: string,
    filter: number | null,
    computer: string
}

export default function Itens(props: Props) {
    const [list, setList] = useState(carte);
    const { search, filter, computer } = props;

    function testSearch(title: string) {
        const regex = new RegExp(search, 'i');
        return regex.test(title);
    }

    function testFilter(id: number) {
        if (filter !== null) return filter === id;
        return true;
    }

    function order(newList: typeof carte) {
        switch (computer) {
            case 'portion':
                return newList.sort((a, b) => a.size > b.size ? 1 : -1);
            case 'qtypeople':
                return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
            case 'price':
                return newList.sort((a, b) => a.price > b.price ? 1 : -1);
            default:
                return newList;
        }
    }

    useEffect(() => {
        const newList = carte.filter(item => testSearch(item.title) && testFilter(item.category.id));
        setList(order(newList));
    }, [search, filter, computer])

    return (
        <div className={styles.itens}>
            {list.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}