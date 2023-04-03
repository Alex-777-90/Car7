import React from 'react';
import {StyledFooter} from "./FooterStyled";
import imagem from "../../img/CAR1.png";
import {Link} from "react-router-dom"

type Props = {}

const Footer = (props: Props) => {
  return (
      <StyledFooter>
            <footer>
                  <Link to ="/">
                      <img src={imagem} alt="Imagem_Logo" />
                  </Link>
                  <div className='textoAddress'>
                      <p>Rua : Dos Carros número 777 ,São Paulo-SP</p>
                      <p>Car7 &copy; 2023 </p>
                  </div>
            </footer>
      </StyledFooter>
  )
}

export default Footer;