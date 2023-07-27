import { FeedLiStyled } from "../../../styles/Feed";

import LoadImage from "../../../componets/LoadImage/index";

const FeedPhotos = ({ photo, setPhotoModal }) => {
  return (
    <FeedLiStyled onClick={() => setPhotoModal(photo)}>
      <LoadImage src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </FeedLiStyled>
  );
};

export default FeedPhotos;
