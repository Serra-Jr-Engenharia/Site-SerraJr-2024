import styled from "styled-components";
import backgroung from "../../Assets/background-popup.jpg"
import { width } from "../../Services/config";


export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  width: 70%;
  height: 80%;
  text-align: center;
  position: relative;

  background-image: url(${backgroung});
  background-size: cover;   
  background-position: center;  
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: default;

  overflow-y: auto;
  scrollbar-width: thin;

`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
    font-size: 2rem;
    right: 2%;
  };
  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    font-size: 2rem;
    right: 2%;
  };
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
    font-size: 3.5rem;
    right: 2%;
  };
  @media screen and (min-width: ${width.extraLargeDesktop}){    
    font-size: 6rem;
    right: 2%;
  }
`;


export const Image = styled.img`
  width: 15%;
  margin-bottom: 7%;
  position: absolute;
  transform: translateY(-50%); 
  z-index: 2;
  @media screen and (max-width: ${width.mobile}) {    
    width: 50%;
    margin-bottom: 10vw;
  };
  @media screen and (min-width: ${width.mobile})and (max-width: ${width.largeMobile}) {    
    width: 50%;
    margin-bottom: 25vh;
  };
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
    width: 28%;
    margin-bottom: 40%;
  };
  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
    width: 20%;
    margin-bottom: 16%;
  };
  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    width: 20%;
    margin-bottom: 8%;
  };

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
    width: 20%;
      margin-bottom: 1%;
  };
  @media screen and (min-width: ${width.extraLargeDesktop}){    
      width: 20%;
      margin-bottom: 4%;
  }
`

export const Title = styled.p`
  position: absolute;
  top: 2%;
  color: #000D1A;
  font-size: 2.5rem;
  margin-bottom: 150px;
  margin-top: 0;
  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
    font-size: 2rem;
  };
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
    font-size: 3.5rem;
  };
  @media screen and (min-width: ${width.extraLargeDesktop}){    
        font-size: 6rem;
  }
`

export const InfoContent = styled.div`
  margin-top: 20%;
  background-color: #000D1A;
  width: 85%;
  border-radius: 10px;
  z-index: 1;
  @media screen and (max-width: ${width.largeMobile}) {    
      width: 90%;
  };
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
    border-radius: 30px;
  };
  @media screen and (min-width: ${width.extraLargeDesktop}){    
     border-radius: 50px;
  }
`

export const Info = styled.p`
  color: white;
  padding: 20px;
  font-size: 0.9rem;
  @media screen and (max-width: ${width.largeMobile}) {    
    font-size: 0.8rem;
  };
  @media screen and (max-width: ${width.tablet}) {    
    font-size: 0.8rem;
  };
  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
    font-size: 0.8rem;
  };
  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    font-size: 1rem;
  };
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
    font-size: 1.5rem;
  };
  @media screen and (min-width: ${width.extraLargeDesktop}){    
        font-size: 2.5rem;
  }
`

export const Members = styled.p`
  color: #000D1A;
  margin: 0;
`

export const MembersTitle = styled.p`
  font-size: 1.2rem;
  @media screen and (max-width: ${width.largeMobile}) {    
      font-size: 1.2rem;
  };
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
    font-size: 2rem;
  };
  @media screen and (min-width: ${width.extraLargeDesktop}){    
        font-size: 3rem;
  }
`

export const Member = styled.li`
  border-radius: 8px;
  text-align: left;
  @media screen and (min-width: ${width.mobile}) and (max-width: ${width.largeMobile}) {    
      font-size: 0.8rem;
  };
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
    font-size: 1.7rem;
  };
  @media screen and (min-width: ${width.extraLargeDesktop}){    
        font-size: 2.5rem;
  }
`

export const MembersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 5px;                        
  list-style: none;             
  padding: 0;
  margin: 10px 0 0 0;
  width: 100%;                 
  box-sizing: border-box;
  align-items: center;
  
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
    grid-template-columns: repeat(3, 1fr); 
    margin-bottom: 2%;
  };

  @media screen and (max-width: ${width.largeMobile}) {    
    grid-template-columns: repeat(2, 1fr); 
    margin-bottom: 5%;
    };
`;


export const Button = styled.button`
  background: linear-gradient(90deg, #FFA726, #EF6C00);
  background-size: 200% 100%;      
  color: #FFFFFF;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  padding: 10px 30px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-position 0.4s ease-in-out, box-shadow 0.3s ease;

  margin-top: 2%;

  &:hover {
    background-position: right center;   
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
  @media screen and (max-width: ${width.mobile}) {    
    margin-bottom: -90vh;
  };
  @media screen and (min-width: ${width.mobile}) and (max-width: ${width.largeMobile}) {    
    margin-bottom: -35vh;
  };
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
    margin-bottom: -12%;
  };
  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
    margin-bottom: -7%;
  };
  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    margin-bottom: -7%;
    width: 20%;
    height: 8%;
  };
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
    margin-bottom: -7%;
    width: 20%;
    height: 5%;
    font-size: 1.5rem;
  };

  @media screen and (min-width: ${width.extraLargeDesktop}){    
    margin-bottom: -7%;
    width: 20%;
    height: 5%;
    font-size: 2.3rem;
  }
`;

export const LinkedinImg = styled.img`
  width: 10%; 
  padding-right: 10px;
`

export const Linkedin = styled.a`

`





