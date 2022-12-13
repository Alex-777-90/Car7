import React from 'react'
import {Link} from "react-router-dom"
import imagem from "../../img/CAR1.png";
import {StyledHeader} from "./HeaderStyled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

type Props = {}

const Header = (props: Props) => {

  return (
      <StyledHeader>
            <header>
                  <Link to ="/">
                      <img src={imagem} alt="Imagem_Logo" />
                  </Link>
                  
                  <div className='about_company'>
                        <Link to ="/">
                            <p>Sobre a Empresa</p>
                        </Link>
                      
                        <Link to ="/">
                            <p>Todos os carros</p>
                        </Link>

                        <Link to ="/">
                            <p>Contatos</p>
                        </Link>
                  </div>

                  <div className='iconUser'>
                      <FontAwesomeIcon icon={faUser}/>
                      <p>Login</p>
                  </div>

            </header>
      </StyledHeader>
  )

}

export default Header;
