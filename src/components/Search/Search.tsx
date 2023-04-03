import React from 'react';
import{StyledSearch} from "./SearchStyled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

type Props = {}

const Search = (props: Props) => {

  return (
      <StyledSearch>
              <form>
                  <div className='select_1'>
                      <select>
                          <option value="marca" selected disabled>Marca</option>
                      </select>
                  </div>

                  <div className='select_1'>
                      <select>
                          <option value="modelo" selected disabled>Modelo</option>
                      </select>
                  </div>

                  <div className='select_1'>
                      <select>
                          <option value="ano_veiculo" selected disabled>Ano do veículo</option>
                      </select>
                  </div>

                  <div>
                      <button>Pesquisar<p><FontAwesomeIcon icon={faMagnifyingGlass}/></p></button>
                  </div>
              </form>
      </StyledSearch>
  )
  
}

export default Search;

