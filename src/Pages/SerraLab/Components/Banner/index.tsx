import React from 'react'
import Img from '../../../../Assets/SerraLab/SerraLab 1.png'
import TypeWriterEffect from '../TypeWriterEffect/index';


import { 
    Presentation, 
    Slogan,
    BannerImg,
    Title
} from './style'


const Banner: React.FC = () =>{
    return(
        <Presentation>
            <Slogan>
                <Title>Serra Lab</Title>
                <TypeWriterEffect/>
            </Slogan>
            <BannerImg src={Img} />
        </Presentation>
    )
}

export default Banner