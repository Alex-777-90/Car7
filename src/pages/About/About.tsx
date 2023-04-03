import React from "react";
import {StyledAbout} from "./AboutStyled";
import image from "../../img/CAR1.png"

type Props = {}

const About = (props: Props) => {
   
    return (
        <StyledAbout>
            <div>
               <img src={image} alt="Imagem_Logo" />
            </div>
            <div>
                <h3>A Car7</h3>
                <p>Surgiu para facilitar a sua vida 
                    na hora de comprar um carro seja ele novo ou usado.
                    Para isso tentamos agilizar tudo o que burocrático
                    Sempre com os menores preços do mercado.
                    Entre no site e fique a vontade para escolher aquele carro 
                    ideal para o seu momento.
                </p>
            </div>
        </StyledAbout>
    )

}

export default About;