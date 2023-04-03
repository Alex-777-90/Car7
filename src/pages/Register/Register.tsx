import React from "react";
import {StyledRegister} from "./RegisterStyled"

type Props = {}

const Register = (props: Props) => {

    return (
        <StyledRegister>
             <form >
               <h3>Cadastro</h3>
                 <label>
                     <span>Nome:</span>
                     <input type="text" />
                 </label>
                 <label>
                     <span>E-mail:</span>
                     <input type="text" />
                 </label>
                 <label>
                     <span>CPF:</span>
                     <input type="text" />
                 </label>
                 <label>
                     <span>Senha:</span>
                     <input type="text" />
                 </label>
                 <label>
                     <span>Confirme a Senha:</span>
                     <input type="text" />
                 </label>
                 <button type="submit">Cadastrar</button>
             </form>
        </StyledRegister>
    )
}

export default Register
