import { useState } from "react";

const RefistrationForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Nome:</p>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>E-mail:</p>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Senha:</p>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default RefistrationForm;
