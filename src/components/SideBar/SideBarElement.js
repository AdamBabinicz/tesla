import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const SideBarSection = styled.div`
  width: 100%;
  height: 100vh;
  background: #333;
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")}; ;
`;

export const SideBarIcon = styled.div`
  color: #fff;
  font-size: 2rem;
  position: absolute;
  right: 0;
  border: none;
  padding: 2.2rem;
  outline: none;
  cursor: pointer;
`;

export const SideBarMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 4rem;
  margin: 0;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const SideBarLink = styled(LinkS)`
  color: #fff;
  font-size: 2rem;
  padding: 1rem 0;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    color: #17ab74;
  }
`;
export const SideBarBtn = styled.div`
  display: flex;
  margin-top: 1.4rem;
`;

export const LinkBtn = styled(LinkS)`
  padding: 1rem 2rem;
  background: #727272;
  font-size: 1.7rem;
  color: #fff;
  width: 100%;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;
