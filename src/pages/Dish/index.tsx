import styles from './Dish.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import carte from 'data/carte.json';
import { lazy } from 'react';

const TagsDish = lazy(() => import('components/TagsDish'));
const NotFound = lazy(() => import('pages/NotFound'));
const PageDefault = lazy(() => import('components/PageDefault'));

export default function Dish() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = carte.find(item => item.id === Number(id));
  if(!dish) {
    return <NotFound />;
  }
  return (
    <Routes>
      <Route path="*" element={<PageDefault />}>
        <Route index element={
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
        } />
      </Route>
    </Routes>
  );
}