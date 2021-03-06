import { graphql } from "gatsby";
import React, { useEffect, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PortableText from "react-portable-text";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";

// Layout
import MainLayout from "../components/layout/mainLayout";
import NavScroll from "../components/navScroll";

// Css
import * as styles from "../styles/modules/about.module.scss";

// Function
import { useAppContext } from "../context/store";
// import { transition } from "../utils/transition";

// Register Plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AboutPage = ({ data }) => {
  const context = useAppContext();
  const contentRef = useRef(new Array());

  useEffect(() => {
    // Fungsi transisi
    // transition({
    //   content: contentRef,
    //   type: "all",
    // });

    return () => {
      // Remove semua scroll trigger
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    }
  }, []);

  return (
    <MainLayout pageTitle="About">
      <NavScroll topTitle="Close" topLink="projects" />
      <Helmet>
        <meta name='description' content={data.seo.seo.seo_description} />
        <meta name='image' content={data.seo.seo.seo_image.asset.url} />
        {/* <meta property='og:url' content="" /> */}
        <meta
          property='og:title'
          content={`About ⟡ ${data.seo.webTitle}`}
        />
        <meta property='og:description' content={data.seo.seo.seo_description} />
        <meta property='og:image' content={data.seo.seo.seo_image.asset.url} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:title'
          content={`About ⟡ ${data.seo.webTitle}`}
        />
        <meta name='twitter:description' content={data.seo.seo.seo_description} />
        <meta name='twitter:image' content={data.seo.seo.seo_image.asset.url} />
      </Helmet>
      <section id={styles.about} className="content">
        <div />
        <div ref={(el) => contentRef.current.push(el)}>
          <PortableText content={data.sanityAbout._rawTitle} />
        </div>
        <div
          className={styles.clients}
          ref={(el) => contentRef.current.push(el)}
        >
          <div>
            <span>Selected Clients</span></div>
          <div>
            {data.sanityAbout.selected_clients.map((data, id) => (
              <GatsbyImage
                key={id}
                image={data.image.asset.gatsbyImageData}
                alt={data.name}
                placeholder="blurred"
                loading="eager"
                objectFit="contain"
              />
            ))}</div>
        </div>
        <div className={styles.press} ref={(el) => contentRef.current.push(el)}>
          <div>
            <span>Press</span>
          </div>
          <div>
            {data.sanityAbout.press.map((data, id) => (
              <a
                href={data.link}
                rel="noreferrer"
                target="_blank"
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
                key={id}
              >
                {data.name}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.contact} ref={(el) => contentRef.current.push(el)}>
          <div>
            <span>Contact</span>
          </div>
          <div>
            {data.sanityAbout.contact.map((data, id) => (
              <a
                href={data.link}
                rel="noreferrer"
                target="_blank"
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
                key={id}
              >
                {data.name}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <span>{data.sanityAbout.footer}</span>
        </div>
        {/* </div> */}
      </section>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    sanityAbout {
      _rawTitle
      selected_clients {
        name
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      press {
        name
        link
      }
      contact {
        name
        link
      }
      footer
    }
    seo: sanityGeneral {
      webTitle
      seo {
        seo_description
        seo_image {
          asset {
            url
          }
          name
        }
      }
    }
  }
`;

export default AboutPage;
