import { useState } from "react";

const ValidationForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    validate(name, value);

    setValues({ ...values, [event.target.name]: event.target.value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErros = {};
    Object.keys(values).forEach((key) => {
      const errorMessage = validate(key, values[key]);
      validationErros = { ...validationErros, [key]: errorMessage };
    });

    setErrors(validationErros);

    if (Object.values(validationErros).some((x) => x !== "")) {
      console.log("Fomulário inválido!");
    } else {
      console.log(values);
    }
  };

  const validate = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "name":
        errorMessage = value ? "" : "O valor não pode ser em branco";
        break;
      case "email":
        break;
      case "password":
        break;
      default:
        break;
    }
    return errorMessage;
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
        {errors.name && <p>{errors.name}</p>}
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

export default ValidationForm;
