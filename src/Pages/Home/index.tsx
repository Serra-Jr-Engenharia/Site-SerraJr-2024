import React from 'react'
import Computacao from './Components/Computacao'
import Mecanica from "./Components/Mecanica"
import SobreNos from './Components/SobreNos'
import GearsBackground from './Components/GearsBackground';


import { Content } from './style'
import Slider from './Components/Slider'

const Home: React.FC = () =>{
    return(
        <Content>
            <p>Teste2</p>
            <Computacao/>
            <Mecanica/>
            <SobreNos/>
<<<<<<< HEAD
            <Slider/>
=======
            <GearsBackground />
>>>>>>> 4769c287971b8e4ba2e40b145399029b562cbe3e
        </Content>
    )
}

export default Home