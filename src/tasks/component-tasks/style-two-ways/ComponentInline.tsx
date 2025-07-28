import Task from './task.json';

const cardInline = () => {
  const requirementsList = Task.requirements.map((req: string, idx: number) => (
    <li key={idx}>{req}</li>
  ));

  return (
    <div
      style={{
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
      <h2>{Task.title}</h2>
      <p>{Task.description}</p>
      <ul>{requirementsList}</ul>
    </div>
  );
};

export default cardInline;
