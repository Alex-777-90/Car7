import React from 'react';
import imagem from "../../img/Bannner_CAR.png";
import {StyledBanner} from "./BannerStyled";


type Props = {}

const Banner = (props: Props) => {

  return (
      <StyledBanner>
            <img src={imagem} alt="Imagem_banner_carro" />
      </StyledBanner>
  )

}

export default Banner;