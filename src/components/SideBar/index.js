import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import {
  SideBarSection,
  SideBarIcon,
  SideBarMenu,
  SideBarLink,
  SideBarBtn,
  LinkBtn,
} from "./SideBarElement";

const SideBar = (props) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <SideBarSection isOpen={props.isOpen}>
        <SideBarIcon onClick={props.toggle}>
          <FaTimes />
        </SideBarIcon>
        <SideBarMenu scrollNav={scrollNav}>
          <SideBarLink
            onClick={props.toggle}
            to="landing"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Start
          </SideBarLink>
          <SideBarLink
            onClick={props.toggle}
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Życiorys
          </SideBarLink>
          <SideBarLink
            onClick={props.toggle}
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Wynalazki
          </SideBarLink>
          <SideBarLink
            onClick={props.toggle}
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Ciekawostki
          </SideBarLink>
          {/* <SideBarBtn>
            <LinkBtn
              onClick={props.toggle}
              to="/Slider"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Galeria
            </LinkBtn>
          </SideBarBtn> */}
        </SideBarMenu>
      </SideBarSection>
    </>
  );
};

export default SideBar;
