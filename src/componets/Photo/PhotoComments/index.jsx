import { useContext, useState } from "react";
import PhotoCommentContent from "./CommentsContent";
import PhotoForm from "./PhotoCommentsForm";

import { GlobalUserContext } from "../../../context/UserContext/UserContext";

const PhotoComment = (props) => {
  const [comments, setComments] = useState(() => props.comments);

  const { loged } = useContext(GlobalUserContext);

  return (
    <>
      <PhotoCommentContent comments={comments} single={props.single} />
      {loged && (
        <PhotoForm
          id={props.id}
          setComments={setComments}
          single={props.single}
        />
      )}
    </>
  );
};

export default PhotoComment;
