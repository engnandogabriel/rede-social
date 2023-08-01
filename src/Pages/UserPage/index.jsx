import { ContainerFeed } from "../../styles/Container";
import Feed from "../Feed";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { user } = useParams();
  return (
    <ContainerFeed>
      <Feed user={user} />
    </ContainerFeed>
  );
};

export default UserPage;
