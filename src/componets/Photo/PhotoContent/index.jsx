import { Link } from "react-router-dom";
import { PhotoContentStyled } from "../../../styles/Photo";
import { Title } from "../../../styles/Text";

import PhotoCommentes from "../PhotoCommentes";

const PhotoContent = ({ data }) => {
  console.log(data);
  const { photo, comments } = data;

  if (!photo || !comments) return null;
  return (
    <PhotoContentStyled>
      {/* <div className="modalContent"> */}
      <div className="photoModalImg">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="modalContentDetails">
        <p className="modalAuthor">
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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
      <PhotoCommentes id={photo.id} comments={comments} />
    </PhotoContentStyled>
  );
};

export default PhotoContent;
