import React ,{useState}from 'react'
import {Link , NavLink} from "react-router-dom"
import imagem from "../../img/CAR1.png";
import {StyledHeader} from "./HeaderStyled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

type Props = {}

const Header = (props: Props) => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

  return (
      <StyledHeader>
            <header>
                  <Link to ="/">
                      <img src={imagem} alt="Imagem_Logo" />
                  </Link>
                  
                  <div className='about_company'>
                        <NavLink to ="/about">
                            <p>Sobre a Empresa</p>
                        </NavLink>
                      
                        <Link to ="/">
                            <p>Todos os carros</p>
                        </Link>

                        <Link to ="/">
                            <p>Contatos</p>
                        </Link>
                  </div>

                  <div className='iconUser' onClick={toggleMenu}>
                      <FontAwesomeIcon icon={faUser}/>
                      <p>Login/Cadastro</p>
                  </div>

                  {showMenu && (
                        <div className="menu">
                            <form >
                                 <label >
                                     <span>E-mail</span><br />
                                       <input type="text" name="" id="" />
                                 </label><br />
                                 <label >
                                     <span>Senha</span><br />
                                       <input type="text" name="" id="" />
                                 </label>
                                 <br />
                                 <button type="submit">Confirmar</button>
                            </form><br />
                            <p>Não tem cadastro ?<br/></p>
                            <NavLink to="/register">Clique aqui</NavLink>
                        </div>
                  )}

            </header>
      </StyledHeader>
  )

}

export default Header;
