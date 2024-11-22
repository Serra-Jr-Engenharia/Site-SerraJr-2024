import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { SloganTextContainer } from './style';

const TypeWriterEffect = () =>{
    return(
        <SloganTextContainer>
            <TypewriterComponent 
                onInit={(typewriter) => {
                    typewriter.typeString('Engrenando ideias, inovando o mercado.')
                    .pauseFor(2000)
                    .deleteAll()
                    .start()
                    
                }}

                options={{
                    wrapperClassName: "writer",
                    cursorClassName: 'writer-cursor',
                    loop: true
                }}
            
            />
        </SloganTextContainer>
    )
}

export default TypeWriterEffect