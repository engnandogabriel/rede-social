import { useContext, useEffect, useState } from "react";
import FeedPhotos from "../FeedPhotos/index";
import LoadGlobal from "../../../componets/LoadGlobal";

import { Title } from "../../../styles/Text";
import { FeedUlStyled } from "../../../styles/Feed";

import { GlobalDashboardContext } from "../../../context/DashboardContext/DashboardContext";

const FeedContent = ({ page, user, setPhotoModal, setInfinite }) => {
  const { fetchPhotos, erro, loadGlobal } = useContext(GlobalDashboardContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPhotho() {
      if (user != 0 || user != undefined) {
        const dataFetch = await fetchPhotos(page, user);
        setData(dataFetch);
        if (dataFetch.length < 3) setInfinite(false);
      } else {
        const dataFetch = await fetchPhotos(0);
        setData(dataFetch);
        if (data.length < 6) setInfinite(false);
      }
    }
    getPhotho();
  }, [user, page, setInfinite]);

  if (erro) return <Title>{erro}</Title>;
  // if (loadGlobal) return <LoadGlobal />;
  if (data)
    return (
      <FeedUlStyled className="aniamteLeft">
        {data.map((photo) => (
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
