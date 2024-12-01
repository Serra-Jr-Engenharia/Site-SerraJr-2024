import React from 'react'
import Img from '../../../../Assets/Contact/imagemContato.png'


import { 
    Presentation, 
    Slogan,
    BannerImg
} from './style'


const Banner: React.FC = () =>{
    return(
        <Presentation>
            <Slogan>Entre em Contato</Slogan>
            <BannerImg src={Img} />
        </Presentation>
    )
}

export default Banner