import React from 'react'
import Computacao from './Components/Computacao'
import Mecanica from "./Components/Mecanica"
import SobreNos from './Components/SobreNos'

import { Content } from './style'
import Slider from './Components/Slider'

const Home: React.FC = () =>{
    return(
        <Content>
            <p>Teste2</p>
            <Computacao/>
            <Mecanica/>
            <SobreNos/>
            <Slider/>
        </Content>
    )
}

export default Home