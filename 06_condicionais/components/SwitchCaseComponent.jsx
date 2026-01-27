import React from "react";

const SwitchCaseComponent = ({ value }) => {
  let component;

  switch (value) {
    case "1":
      component = <div>Valor 1 de 3</div>;
      break;

    case "2":
      component = <div>Valor 3 de 3</div>;
      break;

    case "3":
      component = <div>Valor 3 de 3</div>;
      break;
    default:
      component = <div>Valor não encontrado</div>;
  }

  return component;
};

export default SwitchCaseComponent;
