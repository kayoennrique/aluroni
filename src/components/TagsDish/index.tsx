import classNames from 'classnames';
import { Dish } from 'types/Dish';
import styles from './TagsDish.module.scss';

export default function TagsDish({
  category,
  size,
  serving,
  price
}: Dish) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__type]: true,
        [styles[`tags__type__${category.label.toLowerCase()}`]]: true
      })}>{category.label}</div>
      <div className={styles.tags__portion}>{size}g</div>
      <div className={styles.tags__qtypeople}>{serving} pessoa{serving === 1 ? '' : 's'}</div>
      <div className={styles.tags__price}>R$ {price.toFixed(2)}</div>
    </div>
  );
}