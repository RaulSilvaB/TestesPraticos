import TresProps from "./TresProps";

const Composicao = ({ membrers }) => {
  return (
    <div>
      {membrers.map((membrer, index) => (
        <TresProps
          key={index}
          name={membrer.name}
          age={membrer.age}
          job={membrer.job}
        />
      ))}
    </div>
  );
};

export default Composicao;
