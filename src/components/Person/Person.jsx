export const Person = ({ person }) => {
  let partnerSex = 'wife';

  // eslint-disable-next-line
  person.sex === 'f' ? (partnerSex = 'husband') : null;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      {person.isMarried ? (
        <p className="Person__partner">
          {person.partnerName} is my {partnerSex}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
