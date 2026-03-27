import profileImage from "../assets/images/profile.webp";
import ExperienceCards from "../components/experience-cards/ExperienceCards.jsx";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import { useState } from "react";
import CustomLink from "../components/CustomLink.jsx";
import Card from "../components/card/Card.jsx";

export default function Home() {
  const [featuredProjects, _] = useState(
    projects.filter((project) => project.featured === true),
  );
  return (
    <>
      <section>
        <img src={profileImage} alt="Jacob Asker" className="profile-image" />
        <h2>Hi, I'm Jacob</h2>
        <p>
          I’m a Full-stack Developer with a bachelor's in Informatics, building
          web and mobile applications with a focus on usability and solid
          architecture.
        </p>

        <small>Gothenburg, Sweden | Available for work</small>
        <CustomLink
          href="mailto:jacob.asker@icloud.com"
          className="button small hover-opacity"
        >
          Contact me
        </CustomLink>
      </section>

      <section>
        <div className="hstack justify-between">
          <h2>Featured Projects</h2>
          <Link to="/projects" className="button small ghost hover-bg">
            See all projects
          </Link>
        </div>
        <ul className="grid-container">
          {featuredProjects.map((item) => (
            <li key={item.url}>
              <Card title={item.title} desc={item.preview} url={item.url} />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Skillset</h2>
        <ExperienceCards />
      </section>
    </>
  );
}
