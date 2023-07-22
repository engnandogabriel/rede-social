import { useContext, useState } from "react";
import Input from "../../../componets/Inputs/index";
import InputPost from "../../../componets/Inputs/InputPost";
// ("../../../componets/Inputs/InputPost/index");
import useForm from "../../../hooks/useForm/useForm";
import { FormConatiner } from "../../../styles/Container";
import Button from "../../../componets/Button/index";
import { GlobalDashboardContext } from "../../../context/DashboardContext/DashboardContext";

const DashboaredPhotoPost = () => {
  const name = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { photoPost, load } = useContext(GlobalDashboardContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", name.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    await photoPost(formData);
  }

  function handleImage({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <FormConatiner className="aniamteLeft">
      <form onSubmit={handleSubmit}>
        <div>
          <Input type="text" label="Nome" {...name} />
        </div>
        <div>
          <Input type="number" label="Peso" {...peso} />
        </div>
        <div>
          <Input type="number" label="Idade" {...idade} />
        </div>
        <div>
          <InputPost type="file" name="img" id="img" onChange={handleImage} />
        </div>
        {load ? <Button>Enviando</Button> : <Button>Enviar</Button>}
      </form>
      {img.preview && (
        <div
          className="img-preview"
          // style={{ background: `url(${img.preview})` }}
        >
          <img src={img.preview} />
        </div>
      )}
    </FormConatiner>
  );
};

export default DashboaredPhotoPost;
