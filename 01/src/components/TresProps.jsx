const TresProps = ({ name, age, job }) => {
  return (
    <p>
      Ola! , eu sou o {name}, tenho {age} e{" "}
      {job ? "Trabalho com desenvolvimento de sistemas" : " não trabalho"}
    </p>
  );
};

export default TresProps;
