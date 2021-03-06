import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import ASScroll from '@ashthornton/asscroll';

// Layout
import Navigation from "../navigation";
import CustomCursor from "../cursor";

// Function
import checkCursor from "../../utils/checkCursor";
import topResize from "../../utils/topResize";

const MainLayout = ({ pageTitle, children }) => {
  // Data seo
  const data = useStaticQuery(
    graphql`
      query {
        seo: sanityGeneral {
          webTitle
        }
      }
    `
  );

  const PageTitle = pageTitle && data.seo.webTitle
    ? `${pageTitle} ⟡ ${data.seo.webTitle}`
    : "Kathrin Honesta Portfolio Website";

  const duration = 0.5;
  const variant = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };


  useEffect(() => {
    const asscroll = new ASScroll();
    asscroll.enable();
    console.log('enable');
    checkCursor();

    topResize();
    window.addEventListener("resize", checkCursor, false);

    return () => {
      asscroll.disable();
      console.log('disable');
      window.removeEventListener("resize", checkCursor, false);
    };
  }, []);

  return (
    <>
      <motion.main
        variants={variant}
        initial="initial"
        animate="enter"
        exit="exit"
        id="container"
      >
        <Helmet>
          <meta charSet='utf-8' />
          <title>{PageTitle}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1,viewport-fit=cover"
          />
        </Helmet>
        <CustomCursor />
        <Navigation />
        {children}
      </motion.main>
    </>
  );
};

export default MainLayout;
