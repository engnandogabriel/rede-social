import { useContext, useState } from "react";
import { ReactComponent as SendComment } from "../../../../assets/enviar.svg";
import ButtonComment from "../../../../componets/Button/ButtonComment/";
import { GlobalDashboardContext } from "../../../../context/DashboardContext/DashboardContext";
import { PhotoCommentFormStyled } from "../../../../styles/Photo/index";

const PhotoForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState("");

  const { photoCommentPost } = useContext(GlobalDashboardContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await photoCommentPost(id, { comment });
    if (response) {
      setComments((comments) => [...comments, response]);
      setComment("");
    }
  }

  return (
    // <PhotoCommentFormStyled>
    <PhotoCommentFormStyled
      onSubmit={handleSubmit}
      style={{ margin: `${single ? "1rem 2rem 1rem 0" : ""}` }}
    >
      <textarea
        value={comment}
        id="comment"
        name="comment"
        placeholder="Insira um comentáio"
        onChange={({ target }) => setComment(target.value)}
      />
      <ButtonComment>
        <SendComment />
      </ButtonComment>
      {/* </form> */}
    </PhotoCommentFormStyled>
  );
};

export default PhotoForm;
