import React from 'react'

import TypeWriterEffect from './TypeWriterEffect'

import { 
    Presentation, 
    Slogan,
} from './style'


const Banner: React.FC = () =>{
    return(
        <Presentation>
            <Slogan>
                <TypeWriterEffect />
            </Slogan>
        </Presentation>
    )
}

export default Banner