import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000d1a;
  padding: 1.125rem 3.75rem;
  justify-items: center;
  p {
    color: white;
  }

  @media (max-width: 1100px) {
    padding: 10px 0;
  }

  
`;

export const FooterStyle = styled.div`
  height: 17vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  @media (max-width: 1100px) {

    height: 50%;
    flex-direction: column;
  }
`;

export const LogosSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const LinkToWebsite = styled.p``;

export const InfosSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 30px 0;
  }
`;

export const InfoSection = styled.div`
  height: 50%;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  margin: 15px;

  p {
    margin: 0;
  }

  h4 {
    margin: 10px;
  }

`;

export const LinhaHorizontal = styled.hr`
  width: 100%;
  height: 1 px;

`;

export const CopyRight = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    font-weight: 700;
  }

  @media (max-width: 1100px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    text-align: center;

    p {
      margin: 0;
    }
  }
`;
