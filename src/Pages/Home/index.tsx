import React from 'react'
import Computacao from './Components/Computacao'
import Mecanica from "./Components/Mecanica"
import SobreNos from './Components/SobreNos'
import Banner from "./Components/Banner"

import { Content } from './style'
import Slider from './Components/Slider'

const Home: React.FC = () =>{
    return(
        <Content>
            <Banner/>
            <Computacao/>
            <Mecanica/>
            <SobreNos/>
            <Slider/>
        </Content>
    )
}

export default Home