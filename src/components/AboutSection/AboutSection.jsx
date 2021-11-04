import { useEffect } from "react";
import gsap from "gsap";

// Stylesheets
import "./AboutSection.css";

const AboutSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#about-heading", {
      scrollTrigger: "#about-heading",
      opacity: 1,
      duration: 2,
      delay: 3.5,
    })
      .from("#about-heading", {
        x: -100,
        duration: 2,
        delay: -2,
      })
      .to("#about-content", {
        scrollTrigger: "#about-content",
        opacity: 1,
        duration: 2,
        delay: -1,
      })
      .from("#about-content", {
        x: -100,
        duration: 2,
        delay: -2,
      });
  }, []);

  return (
    <section className="about" id="życiorys">
      <header>
        <h2 className="heading" id="about-heading">
          Życiorys
        </h2>
      </header>
      <main>
        <p className="text" id="about-content">
          <b>Nikola Tesla (1856-1943)</b> – inżynier i wynalazca serbskiego
          pochodzenia. Urodził się 9 lub 10 lipca 1856 roku we wsi Smiljan na
          terenie obecnej Chorwacji. Studiował fizykę i matematykę na
          politechnice w <b>Grazu</b> oraz filozofię na praskim uniwersytecie. W
          1881 roku rozpoczął pracę w urzędzie telefonicznym w
          <b> Budapeszcie</b>. W roku następnym przeniósł się do <b>Paryża</b>,
          gdzie został zatrudniony w <b>Continental Edison Company</b>. Już od
          czasu studiów pracował nad sposobami wykorzystania prądu przemiennego:
          swój pierwszy
          <b> motor indukcyjny</b> zbudował w 1883 roku. Zniechęcony brakiem
          zainteresowania swoim wynalazkiem, w 1884 roku przeniósł się do USA. W
          1891 roku zdobył <b>amerykańskie obywatelstwo</b>.
        </p>
        <p className="text">
          Po przybyciu do Nowego Świata pracował w Nowym Jorku dla
          <b> Thomasa Edisona</b>, ale już w 1887 roku uniezależnił się i zaczął
          działać na własny rachunek. Konkurencja między naukowcami przybrała na
          sile, gdy Tesla zdobył fundusze na rozwijanie swoich wynalazków: w
          1888 roku sprzedał patenty do
          <b>
            &nbsp;systemu prądnic, transformatorów i silników opartych na
            prądzie przemiennym
          </b>
          . Wkrótce wygrały one z promowanymi przez firmę Edisona napędami
          zasilanymi prądem stałym. Po tym, jak Westinghouse wykorzystał system
          Tesli do oświetlenia
          <b> Kolumbijskiej Wystawy Światowej w Chicago w 1893 roku</b>,
          otrzymał kontrakt na budowę pierwszych urządzeń przy
          <b> wodospadzie Niagara</b>.
        </p>
        <p className="text">
          W kolejnych latach wynalazca, który dał się poznać jako wyjątkowy
          ekscentryk, rozwijał szereg projektów. W międzyczasie popularyzował
          też swoje wynalazki w trakcie wykładów w Ameryce i Europie
          (1891-1893). Pracował między innymi nad
          <b> łodzią, sterowaną za pomocą pilota</b>. Już w 1893 roku
          przepowiedział nadejście <b>bezprzewodowej komunikacji</b> – opracował
          szereg urządzeń, które miały na celu
          <b> bezprzewodowe przesyłanie prądu</b>. Proponował także wybudowanie
          „bezprzewodowej fabryki”, zdolnej do
          <b>
            &nbsp;przekazywania na odległość nie tylko wiadomości, ale i
            raportów dotyczących bieżących wydarzeń i pogody
          </b>
          . Eksperymentował także z przesyłem dźwięku, w tej kwestii ubiegł go
          jednak <b>Giulielmo Marconi</b>, który tuż przed nim opatentował
          <b> radio</b>.
        </p>
        <p className="text">
          O niezwykłej kreatywności Tesli świadczy fakt, że między 1886 i 1928
          rokiem przyznano mu w Ameryce aż <b>112 patentów</b>. Otrzymał stopnie
          od <b>uniwersytetów Yale i Columbia</b>, a w 1917 roku
          <b> American Institute of Electrical Engineers</b> nagrodził go
          <b> medalem Edisona</b>. Wiele jego pomysłów z braku funduszy
          pozostało jedynie na papierze. Niektóre – jak choćby
          <b> śmiercionośny promień</b>, zdolny do zniszczenia 10 tysięcy
          samolotów w promieniu 400 kilometrów – były jedynie destrukcyjnymi
          wizjami. Jego wkład w rozwój nauki doceniono, nazywając jego
          nazwiskiem <b>jednostkę indukcji magnetycznej</b>. Zmarł 7 stycznia
          1943 roku w Nowym Jorku.
        </p>
        <p className="text">
          <em>
            https://ciekawostkihistoryczne.pl/leksykon/nikola-tesla-1856-1943
          </em>
        </p>
      </main>
    </section>
  );
};

export default AboutSection;
