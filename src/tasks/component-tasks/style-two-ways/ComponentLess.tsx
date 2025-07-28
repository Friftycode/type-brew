import Task from './task.json';
import styles from './ComponentLess.module.less';

const cardLess = () => {
  const requirementsList = Task.requirements.map((req: string, idx: number) => (
    <li key={idx}>{req}</li>
  ));

  return (
    <div className={styles.cardContainer}>
      <h2>{Task.title}</h2>
      <p>{Task.description}</p>
      <ul>{requirementsList}</ul>
    </div>
  );
};

export default cardLess;
