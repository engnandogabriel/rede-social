import { useContext } from "react";
import ButtonDeletePhoto from "../../Button/ButtonDeletePhoto";

import { GlobalDashboardContext } from "../../../context/DashboardContext/DashboardContext";

const PhotoDelete = ({ id }) => {
  const { deletePhoto, load } = useContext(GlobalDashboardContext);

  async function handleDelete() {
    const confirm = window.confirm("Deseja deletar?");
    if (confirm) {
      const response = await deletePhoto(id);
      if (response.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <>
      {load ? (
        <ButtonDeletePhoto>Deletando</ButtonDeletePhoto>
      ) : (
        <ButtonDeletePhoto handleClick={handleDelete}>
          Deletar
        </ButtonDeletePhoto>
      )}
    </>
  );
};

export default PhotoDelete;
