import carte from 'data/carte.json';
import styles from './Home.module.scss';

export default function Home() {

    let dishesRecommended = [...carte];
    dishesRecommended = dishesRecommended.sort(() => 0.5 - Math.random()).splice(0, 3);

    return (
        <section>
            <h3 className={styles.title}>
                Recomendações da cozinha
            </h3>
            <div className={styles.recommended}>
                {dishesRecommended.map(item => (
                    <div key={item.id} className={styles.recommended}>
                        <div className={styles.recommended__image}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button className={styles.recommended__button}>
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}