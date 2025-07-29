import task from './task.json';
import styles from './ComponentLess.module.less';

const cardLess = () => {
  const requirementsList = task.requirements.map((req: string, idx: number) => (
    <li key={idx}>{req}</li>
  ));

  return (
    <div className={styles.cardContainer}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <ul>{requirementsList}</ul>
    </div>
  );
};

export default cardLess;
