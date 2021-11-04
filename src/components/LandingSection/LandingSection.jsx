import { useState, useEffect } from "react";
import "./LandingSection.css";
import img from "../../assets/images/3.png";
import gsap from "gsap";
import { FaBars } from "react-icons/fa";

const LandingSection = (props) => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".main-heading", {
      opacity: 1,
      duration: 1.5,
    })
      .from(".main-heading", {
        x: -100,
        duration: 1.5,
        delay: -1.5,
      })
      .to(".sub-heading", {
        opacity: 1,
        delay: -1,
        duration: 1.5,
      })
      .from(".sub-heading", {
        x: -100,
        delay: -1.5,
        duration: 1.5,
      })
      .to(".landing-il", {
        opacity: 1,
        delay: -1,
        duration: 1.5,
      })
      .from(".landing-il", {
        y: 100,
        delay: -1.5,
        duration: 1.5,
      })
      .to(".navbar", {
        opacity: 1,
        duration: 1.5,
      });
  }, []);
  return (
    <section id="start">
      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li className="nav-link">
              <a data-scroll href="#start">
                Start
              </a>
            </li>
            <li className="nav-link ">
              <a data-scroll href="#życiorys">
                Życiorys
              </a>
            </li>
            <li className="nav-link ">
              <a data-scroll href="#wynalazki">
                Wynalazki
              </a>
            </li>
            <li className="nav-link ">
              <a data-scroll href="#ciekawostki">
                Ciekawostki
              </a>
            </li>
            <li className="nav-link contact">
              <a data-scroll href="mailto:puaro@vp.pl">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div onClick={props.toggle}>
        <FaBars className="mobile" />
      </div>
      <main className="landing">
        <article>
          <h2 className="main-heading">
            Nikola <span className="orange">Tesla</span>
          </h2>
          <h3 className="sub-heading">
            człowiek <span className="green">z przyszłości</span>
          </h3>
        </article>
        <img src={img} alt="..." className="landing-il" />
        <a data-scroll href="#about" className="chevron">
          <div className="mouse_scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div>
        </a>
      </main>
    </section>
  );
};

export default LandingSection;
