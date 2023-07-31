import { Link } from "react-router-dom";
import { PhotoContentStyled } from "../../../styles/Photo";
import { Title } from "../../../styles/Text";

import { GlobalUserContext } from "../../../context/UserContext/UserContext";

import PhotoComment from "../PhotoComments/index";
import ButtonDeletePhoto from "../PhotoDelete/index";
import LoadImage from "../../../componets/LoadImage/index";
import { useContext } from "react";

const PhotoContent = ({ data, single }) => {
  const { dataUser, loged } = useContext(GlobalUserContext);
  const { photo, comments } = data;

  if (!photo || !comments) return null;
  return (
    <PhotoContentStyled className={`${single ? "single" : ""}`}>
      <div className="photoModalImg">
        <LoadImage src={photo.src} alt={photo.title} />
      </div>
      <div className="modalContentDetails">
        <p className="modalAuthor">
          {dataUser && dataUser.username === photo.author ? (
            <ButtonDeletePhoto id={photo.id} />
          ) : (
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          )}

          <span className="ModalVizualizacao">{photo.acessos}</span>
        </p>
        <Title>
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </Title>
        <ul className="modalAttributes">
          <li>{photo.peso} kg</li>
          <li>
            {photo.idade === 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
          </li>
        </ul>
      </div>
      <PhotoComment id={photo.id} comments={comments} single={true} />
    </PhotoContentStyled>
  );
};

export default PhotoContent;
