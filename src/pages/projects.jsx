import { graphql, Link } from "gatsby";
import React from "react";
import MainLayout from "../components/layout/mainLayout";
import * as styles from "../styles/modules/projects.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import NavScroll from "../components/navScroll";
import ProjectSection from "../components/projectSection";

const ProjectsPage = ({ data }) => {
  return (
    <MainLayout pageTitle="Projects">
      <NavScroll topTitle="Info" topLink="about" backTop={true} />
      {/* <div style={{ height: "100vh" }}> */}
      <section id={styles.projects} data-scroll-container>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <ProjectSection link="/" title="Jessica Watson" image={data.jessica} />
        <ProjectSection link="/" title="suri-ram" image={data.nursery} />
        <ProjectSection link="/" title="Nautilus" image={data.nautilus} />
        {/* <div>
          <Link to="/">
            <div>
              <span>Jessica Watson</span>
            </div>
            <div>
              <StaticImage
                src="../images/jessica watson_final.webp"
                alt="Jessica Watson"
                placeholder="blurred"
                loading="eager"
                objectFit="contain"
                style={{ maxHeight: "100%" }}
              />
            </div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <div>
              <span>suri-ram</span>
            </div>
            <div>
              <StaticImage
                src="../images/Nursery_1.webp"
                alt="Suri-Ram"
                placeholder="blurred"
                loading="eager"
                objectFit="contain"
                style={{ maxHeight: "100%" }}
              />
            </div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <div>
              <span>Nautilus</span>
            </div>
            <div>
              <StaticImage
                src="../images/nautilus.webp"
                alt="Nautilus"
                placeholder="blurred"
                loading="eager"
                objectFit="contain"
                style={{ maxHeight: "100%" }}
              />
            </div>
          </Link>
        </div> */}
        <div>
          <p>©2020 Kathrin Honesta.</p>
        </div>
      </section>
      {/* </div> */}
    </MainLayout>
  );
};

export const query = graphql`
  query {
    jessica: file(relativePath: { eq: "jessica watson_final.webp" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [WEBP],
          placeholder: BLURRED
        )
      }
    }
    nautilus: file(relativePath: { eq: "nautilus.webp" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [WEBP],
          placeholder: BLURRED
        )
      }
    }
    nursery: file(relativePath: { eq: "Nursery_1.webp" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [WEBP],
          placeholder: BLURRED
        )
      }
    }
  }
`;

export default ProjectsPage;
