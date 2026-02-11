import profileImage from "../assets/images/profile.jpeg";
import { Link } from "react-router-dom";
import ExperienceCards from "../components/experience-cards/ExperienceCard";

export default function Home() {
  return (
    <div className="main-content">
      <div className="hero-header">
        <img
          width={100}
          height={100}
          src={profileImage}
          loading="lazy"
          alt="Profile Image"
          className="profile-image"
        />
        <h2>
          Informatics student with a passion for building and designing digital
          things.
        </h2>
      </div>
      <div className="text-section">
        <h2>About Me</h2>
        <p>
          I’m currently finishing my bacherlors degree in informatics, where I
          spend most of my time exploring the intersection of code and user
          experience. When I’m not at the keyboard, you’ll usually find me
          hiking with friends, lifting at the gym, or behind a camera. Take a
          look at some of my{" "}
          <Link className="inline-link" to={"/projects"}>
            projects
          </Link>
          .
        </p>
      </div>
      <div className="text-section">
        <h2>Technical Experience</h2>
        <ExperienceCards></ExperienceCards>
      </div>
    </div>
  );
}
