import React from 'react'
import Img from '../../../../Assets/mecanicaPicture.svg'


import { 
    Presentation, 
    Slogan,
    BannerImg
} from './style'


const Banner: React.FC = () =>{
    return(
        <Presentation>
            <Slogan>Engenharia Mecânica</Slogan>
            <BannerImg src={Img} />
        </Presentation>
    )
}

export default Banner