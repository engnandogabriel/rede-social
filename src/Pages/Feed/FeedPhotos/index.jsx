import { FeedLiStyled } from "../../../styles/Feed";

const FeedPhotos = ({ photo, setPhotoModal }) => {
  return (
    <FeedLiStyled onClick={() => setPhotoModal(photo)}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </FeedLiStyled>
  );
};

export default FeedPhotos;
