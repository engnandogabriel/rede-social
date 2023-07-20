import { FooterStyled } from "../../styles/Footer";

import { ReactComponent as DogFooter } from "../../assets/dogs-footer.svg";
import { TextParag } from "../../styles/Text";

const Footer = () => {
  return (
    <FooterStyled>
      <DogFooter />
      <TextParag>Dogs. Alguns direitos resevados</TextParag>
    </FooterStyled>
  );
};

export default Footer;
