import { values } from "lodash";
import { useState } from "react";

const Dynamic = () => {
  const [fields, setFields] = useState([""]);

  const handleOnChange = (i, event) => {
    const values = [...fields];
    values[i] = event.target.value;
    setFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  const handleAdd = () => {
    const values = [...fields];
    values.push("");
    setFields(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {fields.map((field, i) => (
          <div key={i}>
            <input
              key={i}
              value={field}
              onChange={(event) => handleOnChange(i, event)}
            />
          </div>
        ))}
        <input type="submit" value="Enviar" />
      </form>
      <button onClick={handleAdd}>Novo Campo</button>
    </>
  );
};

export default Dynamic;
