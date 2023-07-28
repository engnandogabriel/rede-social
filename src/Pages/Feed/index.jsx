import { useContext, useEffect, useState } from "react";
import FeedContent from "./FeedContent/index";
import FeedModal from "./FeedModal/index";
// import LoadGlobal from "../../componets/LoadGlobal";

import { GlobalDashboardContext } from "../../context/DashboardContext/DashboardContext";

const Feed = ({ user }) => {
  // const { loadGlobal } = useContext(GlobalDashboardContext);

  const [photoModal, setPhotoModal] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      } else {
        return null;
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  // if (loadGlobal) return <LoadGlobal />;

  return (
    <>
      {photoModal && (
        <FeedModal photo={photoModal} setPhotoModal={setPhotoModal} />
      )}
      {pages.map((page) => (
        <FeedContent
          key={page}
          page={page}
          user={user}
          setPhotoModal={setPhotoModal}
          setInfinite={setInfinite}
        />
      ))}
    </>
  );
};

export default Feed;
