import { useState } from "react";
import FeedContent from "./FeedContent/index";
import FeedModal from "./FeedModal/index";

const Feed = () => {
  const [photoModal, setPhotoModal] = useState(null);
  return (
    <>
      {photoModal && (
        <FeedModal photo={photoModal} setPhotoModal={setPhotoModal} />
      )}
      <FeedContent setPhotoModal={setPhotoModal} />
    </>
  );
};

export default Feed;
