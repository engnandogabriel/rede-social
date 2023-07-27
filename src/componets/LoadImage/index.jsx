import { useState } from "react";
import { LoadImageStyled } from "../../styles/Load";

const LoadImage = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <LoadImageStyled>
      {skeleton && <div className="skeleton-load"></div>}
      {/* <div className="skeleton-load"></div> */}
      <img onLoad={handleLoad} className="image-load" alt={alt} {...props} />
    </LoadImageStyled>
  );
};

export default LoadImage;
