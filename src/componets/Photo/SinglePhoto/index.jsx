import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import LoadGlobal from "../../LoadGlobal";
import PhotoContent from "../PhotoContent";
import { ContainerFeed } from "../../../styles/Container";

import { GlobalDashboardContext } from "../../../context/DashboardContext/DashboardContext";

const SinglePhoto = () => {
  const { fetchOnePhoto, dataPhoto, LoadGlobal } = useContext(
    GlobalDashboardContext
  );
  const { id } = useParams();

  useEffect(() => {
    async function fetchPhoto() {
      await fetchOnePhoto(id);
    }

    fetchPhoto();
  }, [id]);
  if (LoadGlobal) return <LoadGlobal />;
  return (
    <ContainerFeed>
      <PhotoContent data={dataPhoto} single={true} />
    </ContainerFeed>
  );
};
export default SinglePhoto;
