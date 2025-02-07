import TypewriterComponent from 'typewriter-effect';
import { SloganTextContainer } from './style';

const TypeWriterEffect = () =>{
    return(
        <SloganTextContainer>
            <TypewriterComponent 
                onInit={(typewriter) => {
                    typewriter.typeString('Transformando ideias em realidade')
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