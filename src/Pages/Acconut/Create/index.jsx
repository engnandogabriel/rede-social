import { Title } from "../../../styles/Text";
import Input from "../../../componets/Inputs";
import Button from "../../../componets/Button";
import useForm from "../../../hooks/useForm/useForm";

const Create = () => {
  const userName = useForm();
  const email = useForm("email");
  const password = useForm();
  function handleSubmit() {}

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <Title>Cadastre-se</Title>
          <div>
            <Input label="Usuario" type="text" name="username" {...userName} />
          </div>
          <div>
            <Input label="E-mail " type="text" name="email" {...email} />
          </div>
          <div>
            <Input label="Senha" type="text" name="username" {...password} />
          </div>
          <Button>Cadastrar</Button>
        </form>
      </div>
    </>
  );
};

export default Create;
