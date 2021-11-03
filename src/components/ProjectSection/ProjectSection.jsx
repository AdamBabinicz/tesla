import { useEffect } from "react";
import "./ProjectSection.css";
import { PROJECTS } from "../../content/data";
import gsap from "gsap";

const ProjectSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#proj-heading", {
      scrollTrigger: "#proj-heading",
      opacity: 1,
      duration: 2,
      delay: 3.5,
    })
      .from("#proj-heading", {
        x: -100,
        duration: 2,
        delay: -2,
      })
      .to(".proj-cont", {
        scrollTrigger: ".proj-cont",
        opacity: 1,
        duration: 2,
        delay: -1,
      })
      .from(".proj-cont", {
        y: 100,
        duration: 2,
        delay: -2,
      });
  }, []);
  return (
    <section id="projects" className="projects">
      <header>
        <h2 className="heading" id="proj-heading">
          Ciekawostki
        </h2>
      </header>
      <main>
        <article className="proj-cont">
          {PROJECTS.map(({ title, desc, img, link }, i) => (
            <a
              target="_blank"
              rel="noreferrer nooopener"
              href={link}
              className="proj"
              key={i}
            >
              <img src={img} alt="..." className="proj-img" />
              <h3 className="proj-heading orange">{title}</h3>
              <p className="proj-desc">{desc}</p>
            </a>
          ))}
        </article>
      </main>
    </section>
  );
};

export default ProjectSection;
