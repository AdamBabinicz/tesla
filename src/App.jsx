import React, { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Popup from "./components/Popup/Popup";
import LandingSection from "./components/LandingSection/LandingSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import FooterSection from "./components/Footer/FooterSection";
import CookieConsent from "react-cookie-consent";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 2000);
  }, []);
  return (
    <>
      <main>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <LandingSection toggle={toggle} />
        <ProjectSection />
        <AboutSection />
        <SkillsSection />
        <FooterSection />
      </main>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3
          style={{
            marginBottom: "2.5rem",
            textAlign: "center",
            lineHeight: "3.5rem",
          }}
        >
          Człowiek, który wymyślił XX wiek!
          <span aria-label="Description of the overall image" role="img">
            &nbsp;📻
          </span>
        </h3>
        <p>
          Nikola Tesla to amerykański inżynier serbskiego pochodzenia, wynalazca
          i elektrotechnik, który przez wielu ludzi uważany jest za
          najgenialniejszego człowieka XX wieku. Był ekscentrycznym odkrywcą,
          który w pełni poświęcił się swoim wynalazkom. Jako autor blisko 300
          patentów zapisał się na zawsze w historii świata. <br />
          <em>
            www.focus.pl/artykul/nikola-tesla-biografia-naukowca-ktorego-wynalazki-zmienily-swiat
          </em>
        </p>
      </Popup>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "14px",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "16px",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </>
  );
};

export default App;
