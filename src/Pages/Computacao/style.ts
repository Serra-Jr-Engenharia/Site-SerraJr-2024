import styled from "styled-components";


export const Content = styled.div`

  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(4, 173, 215);
  background: linear-gradient(
    to right bottom,
    rgba(4, 173, 215, 0.1) 42%,
    rgba(253, 99, 0, 0.1) 70%
  );
`;

export const TitleContainer = styled.div`
  padding: 40px;
  width: 100%;
  height: 200px;
`

export const CardContent = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  color: "#000D1A";
  font-size: 3rem;
`