import carte from 'data/carte.json';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHouse from 'assets/our_house.png';

export default function Home() {

    let dishesRecommended = [...carte];
    dishesRecommended = dishesRecommended.sort(() => 0.5 - Math.random()).splice(0, 3);

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
                        <button className={styles.recommended__button}>
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