import styles from './Dish.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import carte from 'data/carte.json';
import TagsDish from 'components/TagsDish';

export default function Prato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = carte.find(item => item.id === Number(id));
  if(!dish) {
    return '';
  }
  return (
    <>
      <button className={styles.back} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {dish.title}
        </h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>
            {dish.description}
          </p>
        </div>
        <TagsDish {...dish} />
      </div>
    </>
  );
}