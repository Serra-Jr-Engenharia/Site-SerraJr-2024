import styled from "styled-components";

export const SloganTextContainer = styled.div`
    width: 100%;
    height: fit-content;

    .writer{
        font-family: 'Poppins';
        font-size: 15px;
        color: #fff;
        font-weight: 700;
    }

    .writer-cursor{
        font-family: 'Courier Prime';
        font-size: 15px;
        color: #1a3350;
        font-weight: 700;
        animation: blink 0.5s infinite;
    }

    @keyframes blink {
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
`;

