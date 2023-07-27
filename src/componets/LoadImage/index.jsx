import { useState } from "react";
import { LoadImageStyled } from "../../styles/Load";

const LoadImage = ({ alt, ...props }) => {
  const [skelecton, setSkelecton] = useState(true);

  function handleLoad({ target }) {
    setSkelecton(false);
    console.log(target);
    target.style.opacity = 1;
  }

  return (
    <LoadImageStyled>
      {skelecton == true && <div className="skeleton-load"></div>}
      <img onLoad={handleLoad} {...props} alt={alt} className="image-load" />
    </LoadImageStyled>
  );
};

export default LoadImage;
