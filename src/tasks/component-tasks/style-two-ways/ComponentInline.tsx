import task from './task.json';

const cardInline = () => {
  const requirementsList = task.requirements.map((req: string, idx: number) => (
    <li key={idx}>{req}</li>
  ));

  return (
    <div
      style={{
        fontSize: '1rem',
        maxWidth: '500px',
        backgroundColor: '#222',
        margin: '15px auto',
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <ul>{requirementsList}</ul>
    </div>
  );
};

export default cardInline;
