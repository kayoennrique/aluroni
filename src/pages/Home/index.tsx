import carte from 'data/carte.json';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHouse from 'assets/our_house.png';
import { useNavigate } from 'react-router';
import { Dish } from 'types/Dish';

export default function Home() {
    let dishesRecommended = [...carte];
    dishesRecommended = dishesRecommended.sort(() => 0.5 - Math.random()).splice(0, 3);
    const navigate = useNavigate();

    function redirectToDetails(prato: Dish) {
        navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
      }

    return (
        <section>
            <h3 className={stylesTheme.title}>
                Recomendações da cozinha
            </h3>
            <div className={styles.recommendeds}>
                {dishesRecommended.map(item => (
                    <div key={item.id} className={styles.recommended}>
                        <div className={styles.recommended__image}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button
                            className={styles.recommended__button}
                            onClick={() => redirectToDetails(item)}
                        >
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTheme.title}> Nossa casa </h3>
            <div className={styles.ourHouse}>
                <img src={ourHouse} alt="Casa do aluroni" />
                <div className={styles.ourHouse__address}>
                    Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
                </div>
            </div>
        </section>
    );
}