import { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um e-mail válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha inserida deve conter no mínimo 8 caractéres, uma letra maiúscula e minúscula",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [erro, setErro] = useState(null);

  function onChange({ target }) {
    if (erro) validate(target.value);
    setValue(target.value);
  }

  function validate(value) {
    setErro(null);
    if (!value) return false;
    if (!value.length) {
      setErro("Campo vazio");
      return false;
    }

    if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].message);
      return false;
    }
    return true;
  }

  return {
    value,
    setValue,
    onChange,
    erro,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
export default useForm;
