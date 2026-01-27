const TernaryComponent = ({ condition }) => {
  return (
    <div>{condition ? <p>Este é verdadeiro</p> : <p>Este é falso</p>}</div>
  );
};

export default TernaryComponent;
