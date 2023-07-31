import React, { useContext, useEffect, useRef } from "react";
import { PhotoCommentContentStyled } from "../../../../styles/Photo/index";

const PhotoCommentCon = ({ comments }) => {
  const refComment = useRef(null);
  useEffect(() => {
    refComment.current.scrollTop = refComment.current.scrollHeight;
  }, [comments]);

  return (
    <PhotoCommentContentStyled ref={refComment}>
      <ul>
        {comments.map((coment) => (
          <li key={coment.comment_ID}>
            <b>{coment.comment_author}: </b>
            <span>{coment.comment_content}</span>
          </li>
        ))}
      </ul>
    </PhotoCommentContentStyled>
  );
};

export default PhotoCommentCon;
