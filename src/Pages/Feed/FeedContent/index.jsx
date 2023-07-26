import { useContext, useEffect } from "react";
import FeedPhotos from "../FeedPhotos/index";

import { Title } from "../../../styles/Text";
import { FeedUlStyled } from "../../../styles/Feed";

import { GlobalDashboardContext } from "../../../context/DashboardContext/DashboardContext";

const FeedContent = ({ setPhotoModal }) => {
  const { fetchPhotos, erro, load, dataPhotos } = useContext(
    GlobalDashboardContext
  );

  useEffect(() => {
    async function getPhotho() {
      await fetchPhotos();
    }
    getPhotho();
  }, []);
  if (erro) return <Title>{erro}</Title>;
  if (load) return <Title>Carregando</Title>;
  if (dataPhotos.length > 0)
    return (
      <FeedUlStyled className="aniamteLeft">
        {dataPhotos.map((photo) => (
          <FeedPhotos
            key={photo.id}
            photo={photo}
            setPhotoModal={setPhotoModal}
          />
        ))}
      </FeedUlStyled>
    );
  else return null;
};

export default FeedContent;
