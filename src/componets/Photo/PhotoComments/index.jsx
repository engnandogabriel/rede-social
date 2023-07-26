import React, { useContext, useState } from "react";
import PhotoCommentContent from "./CommentsContent";
import PhotoForm from "./PhotoCommentsForm";

import { GlobalUserContext } from "../../../context/UserContext/UserContext";

const PhotoComment = (props) => {
  const [comments, setComments] = useState(() => props.comments);

  const { loged } = useContext(GlobalUserContext);

  return (
    <>
      <PhotoCommentContent comments={comments} />
      {loged && <PhotoForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComment;
