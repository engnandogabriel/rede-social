import { useContext, useEffect } from "react";

import { GlobalDashboardContext } from "../../../context/DashboardContext/DashboardContext";

import LoadGlobal from "../../../componets/LoadGlobal/index";
import PhotoContent from "../../../componets/Photo/PhotoContent/index";

const FeedModal = ({ photo, setPhotoModal }) => {
  const { fetchOnePhoto, erro, load, dataPhoto } = useContext(
    GlobalDashboardContext
  );
  useEffect(() => {
    if (photo) {
      fetchOnePhoto(photo.id);
    }
  }, [photo]);

  function handleOutsideClick({ target, currentTarget }) {
    if (target === currentTarget) setPhotoModal(null);
  }

  if (erro) return <p>{erro}</p>;
  if (!photo) return null;
  return (
    <div className="modal" onClick={handleOutsideClick}>
      <PhotoContent data={dataPhoto} />;
    </div>
  );
};

export default FeedModal;
