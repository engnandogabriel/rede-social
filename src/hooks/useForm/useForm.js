import { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um e-mail válido",
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
    if (!value) return true;
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
