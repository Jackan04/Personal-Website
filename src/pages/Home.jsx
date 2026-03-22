import profileImage from "../assets/images/profile.webp";
import ExperienceCards from "../components/experience-cards/ExperienceCards.jsx";
import CustomLink from "../components/CustomLink.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section>
        <img src={profileImage} alt="Jacob Asker" className="profile-image" />
        <h2>Full-Stack Developer</h2>
        <p>
          I'm a web developer finishing my Bachelor's in Informatics, looking
          for my first professional role. I build applications with attention to
          both functionality and user experience. Browse my{" "}
          <Link className="inline-link" to="/projects">
            projects
          </Link>
          , or{" "}
          <CustomLink
            className="inline-link"
            href="mailto:jacob.asker@icloud.com"
          >
            get in touch
          </CustomLink>
          .
        </p>
      </section>

      <section>
        <h2>Skillset</h2>
        <ExperienceCards />
      </section>
    </>
  );
}
