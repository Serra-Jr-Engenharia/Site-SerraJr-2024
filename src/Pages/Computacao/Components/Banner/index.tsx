import React from 'react'
import Img from '../../../../Assets/comp1.png'


import { 
    Presentation, 
    Slogan,
    BannerImg
} from './style'


const Banner: React.FC = () =>{
    return(
        <Presentation>
            <Slogan>Engenharia da Computação</Slogan>
            <BannerImg src={Img} />
        </Presentation>
    )
}

export default Banner