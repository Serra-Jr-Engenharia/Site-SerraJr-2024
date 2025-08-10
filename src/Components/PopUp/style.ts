import styled from "styled-components";
import background from "../../Assets/background-popup.jpg";
import { width } from "../../Services/config";

export const PopupContainer = styled.div`
  position: fixed;
  inset: 0; /* top/right/bottom/left: 0 */
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px; /* respiro nas bordas em telas pequenas */
`;

export const PopupContent = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 12px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;

  /* fundo decorativo */
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* layout interno */
  display: flex;
  flex-direction: column;

  /* quem rola é o ContentInner; aqui fica travado */
  overflow: hidden;
  outline: none;
  z-index: 1001;

  /* véu claro para melhorar legibilidade do conteúdo */
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.78);
    border-radius: 12px;
    pointer-events: none;
  }

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    border-radius: 16px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}) {
    border-radius: 18px;
    max-width: 1100px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  z-index: 2;
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  color: #1f2a37;

  @media screen and (min-width: ${width.largeDesktop}) {
    font-size: 34px;
  }
`;

export const Image = styled.img`
  position: relative;
  z-index: 1;
  align-self: center;
  margin-top: 24px;
  width: clamp(96px, 18vw, 160px);
  height: auto;
  object-fit: contain;
`;

export const Title = styled.h2`
  position: relative;
  z-index: 1;
  margin: 8px 0 12px;
  padding: 0 24px;
  text-align: center;
  color: #000d1a;
  font-size: clamp(1.25rem, 2.5vw, 2rem);

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    font-size: 2.25rem;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}) {
    font-size: 2.75rem;
  }
`;

export const ContentInner = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 0 24px 16px;
  margin-bottom: 8px; /* respiro acima do footer */

  flex: 1 1 auto;
  overflow: auto;
  -webkit-overflow-scrolling: touch; /* iOS */
  scrollbar-width: thin; /* Firefox */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cfd8e3;
    border-radius: 8px;
  }

  @media screen and (max-width: ${width.largeMobile}) {
    padding: 0 16px 12px;
  }
`;

export const InfoContent = styled.div`
  position: relative;
  z-index: 1;
  background-color: #000d1a;
  color: #ffffff;
  border-radius: 10px;
  padding: 16px;

  /* sem max-height agressivo; quem rola é o ContentInner */
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    border-radius: 12px;
    padding: 18px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}) {
    border-radius: 14px;
    padding: 22px;
  }
`;

export const Info = styled.p`
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.6;

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    font-size: 1.1rem;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}) {
    font-size: 1.35rem;
  }
`;

export const Members = styled.section`
  position: relative;
  z-index: 1;
`;

export const MembersTitle = styled.h3`
  margin: 8px 0 6px;
  color: #000d1a;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 700;

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}) {
    font-size: 2rem;
  }
`;

export const MembersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media screen and (min-width: ${width.largeMobile}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (min-width: ${width.tablet}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const Member = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f3f6fa;
  border-radius: 8px;
  padding: 8px 10px;
  color: #1f2a37;
  font-size: clamp(0.85rem, 1.6vw, 1rem);

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    font-size: 1.1rem;
    padding: 10px 12px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}) {
    font-size: 1.35rem;
    padding: 12px 14px;
  }
`;

export const Button = styled.button`
  position: relative;
  z-index: 1;
  align-self: center;

  background: linear-gradient(90deg, #ffa726, #ef6c00);
  background-size: 200% 100%;
  color: #ffffff;
  font-weight: 700;
  border: none;
  border-radius: 999px;
  padding: 10px 28px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-position 0.4s ease-in-out, box-shadow 0.3s ease, transform 0.08s ease-in-out;

  &:hover {
    background-position: right center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.28);
  }
  &:active {
    transform: scale(0.98);
  }

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    font-size: 1.15rem;
    padding: 12px 32px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}) {
    font-size: 1.35rem;
    padding: 14px 36px;
  }
`;

export const Footer = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 2;

  display: flex;
  justify-content: center;

  padding: 12px 16px 16px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: saturate(180%) blur(6px);
`;

export const LinkedinImg = styled.img`
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
`;

export const Linkedin = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
